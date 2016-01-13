Closures Are Not Magic

This page explains closures so that a programmer can understand them — using working JavaScript code. It is not for gurus or functional programmers.

Closures are not hard to understand once the core concept is grokked. However, they are impossible to understand by reading any academic papers or academically oriented information about them!

This article is intended for programmers with some programming experience in a mainstream language, and who can read the following JavaScript function:

function sayHello(name) {
    var text = 'Hello ' + name;
    var sayAlert = function() { alert(text); }
    sayAlert();
}
An Example of a Closure

Two one sentence summaries:

a closure is the local variables for a function — kept alive after the function has returned, or
a closure is a stack-frame which is not deallocated when the function returns (as if a 'stack-frame' were malloc'ed instead of being on the stack!).
The following code returns a reference to a function:

function sayHello2(name) {
    var text = 'Hello ' + name; // Local variable
    var sayAlert = function() { alert(text); }
    return sayAlert;
}
var say2 = sayHello2('Bob');
say2(); // alerts "Hello Bob"
Most JavaScript programmers will understand how a reference to a function is returned to a variable (say2) in the above code. If you don't, then you need to before you can learn closures. A C programmer would think of the function as returning a pointer to a function, and that the variables sayAlert and say2 were each a pointer to a function.

There is a critical difference between a C pointer to a function and a JavaScript reference to a function. In JavaScript, you can think of a function reference variable as having both a pointer to a function as well as a hidden pointer to a closure.

The above code has a closure because the anonymous function function() { alert(text); } is declared inside another function, sayHello2() in this example. In JavaScript, if you use the function keyword inside another function, you are creating a closure.

In C, and most other common languages after a function returns, all the local variables are no longer accessible because the stack-frame is destroyed.

In JavaScript, if you declare a function within another function, then the local variables can remain accessible after returning from the function you called. This is demonstrated above, because we call the function say2() after we have returned from sayHello2(). Notice that the code that we call references the variable text, which was a local variable of the function sayHello2().

function() { alert(text); } // Output of say2.toString();
Looking at the output of say2.toString(), we can see that the code refers to the variable text. The anonymous function can reference text which holds the value 'Bob' because the local variables of sayHello2() are kept in a closure.

The magic is that in JavaScript a function reference also has a secret reference to the closure it was created in — similar to how delegates are a method pointer plus a secret reference to an object.

More examples

For some reason, closures seem really hard to understand when you read about them, but when you see some examples you can click to how they work (it took me a while). I recommend working through the examples carefully until you understand how they work. If you start using closures without fully understanding how they work, you would soon create some very weird bugs!

Example 3

This example shows that the local variables are not copied — they are kept by reference. It is kind of like keeping a stack-frame in memory when the outer function exits!

function say667() {
    // Local variable that ends up within closure
    var num = 666;
    var sayAlert = function() { alert(num); }
    num++;
    return sayAlert;
}
var sayNumber = say667();
sayNumber(); // alerts 667
Example 4

All three global functions have a common reference to the same closure because they are all declared within a single call to setupSomeGlobals().

function setupSomeGlobals() {
    // Local variable that ends up within closure
    var num = 666;
    // Store some references to functions as global variables
    gAlertNumber = function() { alert(num); }
    gIncreaseNumber = function() { num++; }
    gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();
gIncreaseNumber();
gAlertNumber(); // 667
gSetNumber(5);
gAlertNumber(); // 5

var oldAlert = gAlertNumber;

setupSomeGlobals();
gAlertNumber(); // 666

oldAlert() // 5
The three functions have shared access to the same closure — the local variables of setupSomeGlobals() when the three functions were defined.

Note that in the above example, if you call setupSomeGlobals() again, then a new closure (stack-frame!) is created. The old gAlertNumber, gIncreaseNumber, gSetNumber variables are overwritten with new functions that have the new closure. (In JavaScript, whenever you declare a function inside another function, the inside function(s) is/are recreated again each time the outside function is called.)

Example 5

This one is a real gotcha for many people, so you need to understand it. Be very careful if you are defining a function within a loop: the local variables from the closure do not act as you might first think.

function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = 'item' + i;
        result.push( function() {alert(item + ' ' + list[i])} );
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // Using j only to help prevent confusion -- could use i.
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}
The line result.push( function() {alert(item + ' ' + list[i])} adds a reference to an anonymous function three times to the result array. If you are not so familiar with anonymous functions think of it like:

pointer = function() {alert(item + ' ' + list[i])};
result.push(pointer);
Note that when you run the example, "item2 undefined" is alerted three times! This is because just like previous examples, there is only one closure for the local variables for buildList. When the anonymous functions are called on the line fnlist[j](); they all use the same single closure, and they use the current value for i and item within that one closure (where i has a value of 3 because the loop had completed, and item has a value of 'item2'). Note we are indexing from 0 hence item has a value of item2. And the i++ will increment i to the value 3.

Example 6

This example shows that the closure contains any local variables that were declared inside the outer function before it exited. Note that the variable alice is actually declared after the anonymous function. The anonymous function is declared first; and when that function is called it can access the alice variable because alice is in the same scope (JavaScript does variable hoisting). Also sayAlice()() just directly calls the function reference returned from sayAlice() — it is exactly the same as what was done previously, but without the temporary variable.

function sayAlice() {
    var sayAlert = function() { alert(alice); }
    // Local variable that ends up within closure
    var alice = 'Hello Alice';
    return sayAlert;
}
sayAlice()();
Tricky: note also that the sayAlert variable is also inside the closure, and could be accessed by any other function that might be declared within sayAlice(), or it could be accessed recursively within the inside function.

Example 7

This final example shows that each call creates a separate closure for the local variables. There is not a single closure per function declaration. There is a closure for each call to a function.

function newClosure(someNum, someRef) {
    // Local variables that end up within closure
    var num = someNum;
    var anArray = [1,2,3];
    var ref = someRef;
    return function(x) {
        num += x;
        anArray.push(num);
        alert('num: ' + num +
            '\nanArray ' + anArray.toString() +
            '\nref.someVar ' + ref.someVar);
      }
}
obj = {someVar: 4};
fn1 = newClosure(4, obj);
fn2 = newClosure(5, obj);
fn1(1); // num: 5; anArray: 1,2,3,5; ref.someVar: 4;
fn2(1); // num: 6; anArray: 1,2,3,6; ref.someVar: 4;
obj.someVar++;
fn1(2); // num: 7; anArray: 1,2,3,5,7; ref.someVar: 5;
fn2(2); // num: 8; anArray: 1,2,3,6,8; ref.someVar: 5;
Summary

If everything seems completely unclear then the best thing to do is to play with the examples. Reading an explanation is much harder than understanding examples. My explanations of closures and stack-frames, etc. are not technically correct — they are gross simplifications intended to help understanding. Once the basic idea is grokked, you can pick up the details later.

Final points:

Whenever you use function inside another function, a closure is used.
Whenever you use eval() inside a function, a closure is used. The text you eval can reference local variables of the function, and within eval you can even create new local variables by using eval('var foo = …')
When you use new Function(…) (the Function constructor) inside a function, it does not create a closure. (The new function cannot reference the local variables of the outer function.)
A closure in JavaScript is like keeping a copy of all the local variables, just as they were when a function exited.
It is probably best to think that a closure is always created just on entry to a function, and the local variables are added to that closure.
A new set of local variables is kept every time a function with a closure is called (given that the function contains a function declaration inside it, and a reference to that inside function is either returned or an external reference is kept for it in some way).
Two functions might look like they have the same source text, but have completely different behaviour because of their 'hidden' closure. I don't think JavaScript code can actually find out if a function reference has a closure or not.
If you are trying to do any dynamic source code modifications (for example: myFunction = Function(myFunction.toString().replace(/Hello/,'Hola'));), it won't work if myFunction is a closure (of course, you would never even think of doing source code string substitution at runtime, but...).
It is possible to get function declarations within function declarations within functions — and you can get closures at more than one level.
I think normally a closure is the term for both the function along with the variables that are captured. Note that I do not use that definition in this article!
I suspect that closures in JavaScript differ from those normally found in functional languages.

### Links

- Douglas Crockford's simulated [private attributes and private methods](http://www.crockford.com/javascript/private.html) for an object, using closures.
- A great explanation of how closures can [cause memory leaks in IE](http://www.codeproject.com/Articles/12231/Memory-Leakage-in-Internet-Explorer-revisited) if you are not careful.