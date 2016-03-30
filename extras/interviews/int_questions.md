# Common Interview Questions

I asked some past students to send me some questions they were asked as new Devs in their first interviews and any questions their company asks when hiring a Junior Dev. 

Here are some responses:

#### Ben Benjamin

> "Tell them to hit `this` hydro http://code.tutsplus.com/tutorials/fully-understanding-the-codethiscode-keyword--net-21117 and then proceed to learn react if you're already solid with angular - and if they're going for frontend that is.
>
> React really helps you write better Angularjs and makes you think of SPAs in a much more componential way. Plus, it's rad to know both, bc, you know, options."

#### Taylor Harwood

"Sometimes we stump people with CSS questions - 6 out of 6 didn't know what `!important` does in the interviews I've given.

this one is fun:

```console.log(&#39;hello&#39;);
setTimeout(() => {
  console.log('hey');
}, 100);
console.log('world');
setTimeout(() => {
  console.log('yo');
}, 50);
```
what’s the ordering of the logs?

##### more generally, what’s an event loop and what’s a callback queue

abstracty things i would ask on the JS side, if i were interviewing:

1. what is the difference between `this`, `context`, and `scope`?
2. what is a callback function?
3. what is the event loop?
4. what is asynchronous programming? what are the advantages of it?
5. what is prototypal inheritance? how is it different from classical inheritance?
6. what data type are JavaScript functions? assuming you are right, why is this advantageous?

this is good, too: https://github.com/h5bp/Front-end-Developer-Interview-Questions#js-questions - the JS stuff in particular

but more than anything bash context and `this` into their heads. it’s so hugely important"

#### Joey Lin

"leetcode is good if you want to practice link list node, stacks, those CS concepts if you are interviewing for big companies

for small companies, get really good with css and responsiveness since that’s the easy but tedious part most new devs have to start out doing anyway"

#### Tara Strauss

"I second joey's comment about responsiveness - thats super important. 

I would also suggest learning a  lot about the command line and setting up your dev environment (like what was done for us on install fest) cause often there's no one to walk you through setting everything up and choosing different technologies that work well together.

oh and one other thing more specific to interviewing - if the job posting lists a technology that you don't know, but they brought you in for an interview - make sure to do a lot of research on the technology you aren't familiar with. when they ask if you know it a response like this will get you almost as many bonus points: 'i haven't used it before but i did a lot of research on it this week when i saw the job posting - it seems really awesome and i'm excited to learn more. [insert some specific detail to prove you did your homework]'"

### Random Assortment of small snippets from multiple people:

- Fibonacci Sequence (often checking your ability to write a recursive function)
- Reverse the words within a string but preserve the order
- Breadth First Search & Depth First Search (an especially "CS" topic - also a good question for recursion)
- Given a number, tell if it is a power of two
- FizzBuzz
- Given code, can you tell what is in scope?


- Promises and Callbacks
- Anonymous Functions & IIFEs
- Difference Between Composition and Inheritance
- Psuedocode game logic

### References

[How do you judge a JS programmer in 5 questions?](https://www.quora.com/How-do-you-judge-a-JavaScript-programmer-by-only-5-questions)

[List of Front End Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions#js-questions)

[More on `this`](http://code.tutsplus.com/tutorials/fully-understanding-the-codethiscode-keyword--net-21117)