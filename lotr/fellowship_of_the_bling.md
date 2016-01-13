# Fellowship of the Bling ($)

![Frodo ponders the power of the ring.](images/frodo.jpg)

Using our new-found knowledge of jQuery, create a function for each of
the following steps to practice DOM Manipulation, JavaScript, and 
jQuery.

### Setup

Check out [`scripts/fellowship.js`](scripts/fellowship.js). 
This is where you will work. Starter data (character and land names)
has been provided.

### Directions

1.  Define and invoke the functions outlined below inside of
    [`scripts/fellowship.js`](scripts/fellowship.js).
2.  When you are finished with all of them, you can use
    timers and chaining to make the "script" functions play
    in order.

---

### Part 1


#### Make Middle Earth

```js
function makeMiddleEarth() {
  // 1.  Create a section tag with an id of middle-earth
  // 2.  Create an article tag for each land in the lands array.
  // 3.  Give each article tag a class of "land".
  // 4.  Inside each article tag include an h1 with the name
  //     of the land.
  // 5.  Append each article.land to section#middle-earth.
  // 6.  Append section#middle-earth to the document body.
  // 7.  Use setTimeout to delay the execution of the next
  //     function (in this case, makeHobbits) by several 
  //     seconds.
}

makeMiddleEarth();
```

#### Make the Hobbits

```js
function makeHobbits() {
  // 1.  Create a ul with an id of "hobbits".
  // 2.  Create li tags for each Hobbit in the hobbits array.
  // 3.  Give each li tag a class of "hobbit".
  // 4.  Set the text of each li.hobbit to one of the Hobbits
  //     in the array
  // 5.  Append the ul#hobbits to the article.land representing 
  //     "The Shire" (the first article tag on the page).
}
```

### Part 2

#### Keep It Secret, Keep It Safe

```js
function keepItSecretKeepItSafe() {
  // 1.  Create a div with an id of "the-ring".
  // 2.  Give div#the-ring a class of "magic-imbued-jewelry".
  // 3.  Add an event listener so that when a user clicks on 
  //     the ring, the nazgulScreech function is invoked.
  // 4.  Add div#the-ring as a child element of the li.hobbit
  //     representing "Frodo."
}
```

#### ...

```js
function makeBuddies() {
  // 1.  Create an aside tag.
  // 2.  Create a ul tag with an id of "buddies" and append it to 
  //     the aside tag.
  // 3.  Create li tags for each buddy in the buddies array in 
  //     characters.js.
  // 4   Give each li tag a class of "buddy" and append them to 
  //	  "ul#buddies".
  // 5.  Insert the aside tag as a child element of the secion.land 
  //     representing "Rivendell".
  // 6.  Use setTimeout to delay the execution of the next function.
}
```

#### ...

```js
function beautifulStranger() {
  // 1.  Find the li.buddy representing "Strider".
  // 2.  Change the "Strider" textnode to "Aragorn" and make its 
  //     text green.
  // 3.  Use setTimeout to delay the execution of the next function.
}
```

#### ...

```js
function leaveTheShire() {
  // 1.  Assemble the Hobbits and move them to Rivendell.
  // 2.  Use setTimeout to delay the execution of the next function.
}
```

### Part 3

#### ...

```js
function forgeTheFellowShip() {
  // 1.  Create a div with an id of 'the-fellowship' within the 
  //     section.land for "Rivendell".
  // 2.  Add each hobbit and buddy one at a time to 
  //     'div#the-fellowship'.
  // 3.  After each character is added make an alert that they 
  //     have joined your party.
  // 4.  Use setTimeout to delay the execution of the next function 
  //     by several seconds.
}
```

#### ...

```js
function theBalrog() {
  // 1.  Select the "li.buddy" for "Gandalf".
  // 2.  And change its textNode to "Gandalf the White".
  // 3.  Apply style to the element, adding a "3px solid white" 
  //     border to it.
  // 4.  Use setTimeout to delay the execution of the next function.
}
```

#### ...

```js
// Boromir's been killed by the Uruk-hai!!

function hornOfGondor() {
  // 1.  Pop up an alert that the Horn of Gondor has been blown.
  // 2.  Put a line-through on Boromir's name.
  // 3.  And fade Boromir's opacity to 0.3 (he lives on in spirit).
  // 4.  Use setTimeout to delay the execution of the next function.
}
```

### Part 4

#### ...

```js
function itsDangerousToGoAlone(){
  // 1.  Take Frodo and Sam out of The Fellowship and move them 
  //     to Mordor.
  // 2.  Add a div with an id of 'mount-doom' to Mordor
  // 3.  Use setTimeout to delay the execution of the next function
}
```

#### ...

```js
function weWantsIt() {
  // 1.  Create a div with an id of 'gollum' and add it to Mordor.
  // 2.  Remove The Ring from Frodo and give it to Gollum.
  // 3.  Move Gollum into Mount Doom.
  // 4.  Use setTimeout to delay the execution of the next function.
}
```

#### ...

```js
function thereAndBackAgain() {
  // 1.  Remove Gollum and the Ring from the document.
  // 2.  Move all the hobbits back to The Shire.
  // 3.  Add the class "collapse" to Mordor.
}
```

### Part 5

- Within the click event listener for clicking `'#the-ring'`, so that when it's clicked, it not only calls `nazgulScreech`, but also causes frodo's opacity to go down to 0 for awhile, only to fade back in.
- If the ring is clicked 3 times, the entire body element should disappear, to be replaced with the text "The Ring has been returned to Sauron and the world is over."

### Part 6

... AUTOPLAY ...

### Part 7

- Within the callback for the click event on '#the-ring",
in addition to calling nazgulScreech,
use jQuery's `fadeOut` and `fadeIn` methods  to make Frodo to fade out,
only to fade in 3 seconds later

- If the ring is clicked 3 times, make Sauron's eye expand in size.
Then after a slight delay, make the entire body element disappear and replaced
with the text "The Ring has been returned to Sauron and the world is over."

- Add a 'Pause' button to the page. Give it an event listener that stops the
execution of the page, regardless of where in the storyline you are.


#### Resources

- [Official jQuery Documentation](http://jquery.com)
- [MDN](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference)
- [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers.setTimeout)
- [LOTR](http://en.wikipedia.org/wiki/The_Lord_of_the_Rings)
