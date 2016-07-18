# VEGAS BABY!

![](https://images-na.ssl-images-amazon.com/images/G/01/dvd/sony/21/12_4lg.jpg)

## Big O Notation - Optimization Basics

#### Road Map
1. What is Big O Notation?
2. Constant
3. Linear
4. Quadratic
5. Logarithmic
6. Exponential
7. Outro

### What is Big O Notation?

![](https://upload.wikimedia.org/wikipedia/commons/a/a5/Big-o-approx-logo.png)

"Big O notation is a mathematical notation that describes the limiting 
behavior of a function when the argument tends towards a particular 
value or infinity." - Wikipedia

> wut?

Think of Big O as a way to classify types of algorithms based on the 
amount of calculations it would need to make. A function's Big-O 
notation is determined by how it responds to different inputs. How much 
slower is it if we give it a list of 1000 things to work on instead of a 
list of 1 thing?

If you've taken calculus, you can see a lot of similarities to finding
limits of a function.

We'll look at a few different types, then try and optimize a code 
challenge.

### Common Algorithms

![Big O Cheatsheet](http://static1.squarespace.com/static/506e28cee4b04973cff61716/t/518eb7a0e4b0d03df1fe0cbc/1368307617566/Big+O+Notation+Summary.jpg)

#### Constant, _O_(1)

The constant algorithm is one that will always execute in the same time 
(or space) regardless of the size of the input data set.

```js
function isFirstElementZero(listOfNums) {
    return listOfNums[0] === 0;
}
```

This is obviously the most optimized search.

#### Linear, _O_(N)

"O(N) describes an algorithm whose performance will grow linearly and in 
direct proportion to the size of the input data set. The example below 
also demonstrates how Big O favours the worst-case performance scenario; 
a matching string could be found during any iteration of the for loop 
and the function would return early, but Big O notation will always 
assume the upper limit where the algorithm will perform the maximum 
number of iterations." -- Rob Bell

```js
function containsValue(listOfNums, target) {
  for (var i = 0; i < listOfNums.length; i++) {
    if (listOfNums[i] === target) return true;
  }
  return false;
}
```

#### Quadratic, _O_(N<sup>2</sup>)

This could be extrapolated from the previous example, but it's added
here for completion.

"_O_(N<sup>2</sup>) represents an algorithm whose performance is 
directly proportional to the square of the size of the input data set. 
This is common with algorithms that involve nested iterations over the 
data set. 

Deeper nested iterations will result in _O_(N<sup>3</sup> = cubic), 
_O_(N<sup>4</sup>), etc." -- Rob Bell

```js
function containsDuplicates(listOfNums) {
  for (var i = 0; i < listOfNums.length; i++) {
    for (var k = 0; k < listOfNums.length; k++) {
      // Don't compare with self
      if (k !== i && listOfNums[i] === listOfNums[k]) {
        return true;
      }
    }
  }
  return false;
}
```

#### Logarithmic, _O_(log N)

_O_(log N) is most commonly seen in binary search functions.

I know the word binary can seem terrifying, but recall that all it means
is 2. Or, think of it as "yes" or "no".

In binary search algorithms, you remove half of a list with each loop,
until you're left with the correct answer.

It's like taking a phone book with people ordered a-z, and asking for 
the name Sammi Sanchez. You go from the middle of book and ask, "is 
Sanchez M, before M, or after M?" Since it's after, you rip the book in 
half, leaving yourself if only N - Z, then repeat.

If you look at the graph below, you can see that _O_(log N) is actually
__the theoretical limit for searching a dataset!__

![Big O Graph](http://www.cs.ucsb.edu/~pconrad/cs40/images/ch03_jpeg/03-2-003.jpg)

```js
function binaryIndexOf(listOfSortedNums, searchElement) {

  var minIndex = 0;
  var maxIndex = listOfSortedNums.length - 1;
  var currentIndex;
  var currentElement;
  
  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = listOfSortedNums[currentIndex];

    if (currentElement < searchElement) {
      minIndex = currentIndex + 1;
    } else if (currentElement > searchElement) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
}
```

#### Exponential, _O_(2<sup>N</sup>)

"_O_(2<sup>N</sup>) denotes an algorithm whose growth doubles with each 
additon to the input data set. The growth curve of an _O_(2<sup>N</sup>) 
function is exponential - starting off very shallow, then rising 
meteorically." -- Rob Bell

Overall, we want to avoid Exponential Notation at all costs. You can
see the pain it causes our browsers!

```js
function raise2ToThe(n) { // PS, this is extremely complex
  if (n == 0) return 1;
  return raise2ToThe(n - 1) + raise2ToThe(n - 1);
}
```

## Outro

Big O notation takes time to understand - entire college courses are 
taught on the subject. It lies at the heart of optimization, and people
get paid big big bucks if they have a strong understanding of these
patterns.

Having said that, so much of our development environment is already 
optimized by the other genius programmers out there, that we don't need
to worry about this too much at such an early stage. Hopefully these
vocab words will help you in your interview process, but don't stress
about implementing these techniques right away.

#### References

[Search Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

[Beginner's Guide to Big O Notation](https://www.toptal.com/developers/sorting-algorithms)
