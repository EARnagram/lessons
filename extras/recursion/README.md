# Recursion

![Recursive](http://2.bp.blogspot.com/-jcJ4mPedBV0/VMqH2QawJWI/AAAAAAAAABw/fsny8jdeMfQ/s1600/3620061163_ba9f8d5031_z.jpg)

## What is Recursion?

> recursive (_adj._) - characterized by recurrence or repitition, in 
> particular

A recursive function, or recursion, is a function that calls itself, 
until it doesn't.

That's it.

Often, we get bogged down with highfalutin examples and definitions of 
recursive strategies, eg, the classic recursion problem of fibonacci's
sequence:

```js
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}
```

How stupid! Why teach this simple idea in such difficult terms!

Let's look at a countdown timer instead:

```js
function countdown(n) {
  console.log(n);
  if (n === 0) return;
  return countdown(n-1);
}
```

Let's walk through `countdown`:

1. It logs the number `n` to the console.
2. It checks if `n` is 1. If so, it returns and ends the recursion.
3. It calls itself with `n-1`, meaning we'd redo the same steps, but now
   with a number 1 less than the original.

I know what you're thinking - why would we use this when we have 
perfectly good loops? I love my `while` and `for` loops, not to mention
my iterable functions like `.forEach`. Furthermore, recursive calls are
generally non-optimal in most languages (purely functional languages
being the exception)! So why are they used?!

Let's look at an example using `setTimeout`:

```js
function badCountdown(n) {
  while(n > 0) {
    setTimeout(function() { 
      console.log(n) 
    }, 1000);
    n--;
  }
  console.log("Time!");
  return;
};
```

__Why does this fail?__

> Due to the asynchronous nature of JS, we're bypassing that setTimeout, 
> and evaluating all of our `n`'s at once.

Recursion gives us greater control of WHEN things happen.

```js
function countdown(n) {
  console.log(n);
  setTimeout(function() {
    if (n === 1) {
      console.log("Time!");
      return;
    }
    countdown(n-1);    
  }, 1000);
}
```

Notice the return statement - much like a loop, we must dictate when to 
break out of a function. This can often give us greater choice when 
working with complex tasks.

Often, a recursive function is said to have at least 2 "cases": a "base
case" and a "recursive case."

- Recursive Case - A return statement that returns the function being
  defined.
- Base Case - A return statement within a recursive function that ends
  the recursion. 

> Can anyone define the recursive case and base case of the countdown
> timer?

#### Conclusion

Thinking of recursive functions as flashy loops can really help your
initial understanding of them.

Thinking of recursion as nothing more than a function that calls itself
until it's instructed otherwise, can really isolate the key features of
a recursive function.

Try out the exercises in `/js`, and if you'd like more function 
practice, [nodeschool.io](http://www.nodeschool.io) has your back with
[functional-javascript-workshop](https://github.com/timoxley/functional-javascript-workshop)!

##### More References:

[Codeacademy's JS Recursion](https://www.codecademy.com/courses/javascript-lesson-205/0/1)

[Advanced Recursion](http://www.integralist.co.uk/posts/js-recursion.html)



