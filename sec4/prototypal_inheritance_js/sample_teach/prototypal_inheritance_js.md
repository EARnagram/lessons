<img src="images/ga.png" height="100px" width="80px" float="left">
# Prototypal Inheritance in Javascript

![Arnold Explosions](https://upload.wikimedia.org/wikipedia/en/1/1d/Commando-Matrix-Firing_Rocket_Launcher.png)

## Starring Arnold Schwarzenegger 

### Lesson Objectives
- Demonstrate a use case that explains prototypal inheritance and what kind of flexibility it gives to programmers
- Use namespaces to organize application code
- Define a custom constructor method that sets one or more properties of a new object

Today we’re going to take a really horrific looking concept, Prototypal Inheritance in Javascript, and break it down into something we can actually understand with the help of Hollywood's favorite action star.

Prototypal Inheritance is extremely powerful and will lead to writing significantly less code. Plus it's simple and dynamic, making it perfect for JS.

So far, we've worked with variables, functions, callbacks, and objects in Javascript.

**How did we create an object in past lessons?**

Object literal notation (otherwise known as object initializers)! 

But what if we want _many versions_ of the same object? 

**When do you think you'd need multiple versions of an object?**

So what are we supposed to do? Certainly there's got to be a more DRY method than using nothing but object literal notation... and OF COURSE there is!  

Today we'll be introduced to two new concepts:
	1. Constructor Functions 
	2. Creating custom methods using the prototype object

First we'll create our own constructor function to create henchmen for Arnold to wreck in his upcoming movie. Then, we'll beef up the henchmen for the final scenes!

Once you become comfortable with the concept of prototypal inheritance, you'll use it ALL THE TIME because it's powerful, it leads to more DRY code, it's dynamic (and therefore better for dynamic languages, like JS), and, above all, with a little practice, it's simple.

## The Prototype Chain... with Buzzsaw!

Open up the sample code and let's take a look at this `Arnold` object. Go aheads and move him into your console in chrome.

```
var Arnold = {
  hasta: "hasta la vista... baby.",
  arms: {
    biceps: "huge",
    triceps: "pretty dang big",
    deltoids: "wow"
  },
  health: 10000,
  puny: false,
  complain: "Come on! These henchmen are going to leave a bruise!",
  friends: ["Carl Weathers", "Tom Arnold", "Linda Hamilton", "Danny Devito"],
  punch: function(enemy) {
    enemy.health -= 50;
    if (enemy.health < 0) return enemy.scream;
  },
  shotgun: function(enemy1, enemy2, enemy3) {
    enemy1.health -= 100;
    enemy2.health -= 100;
    enemy3.health -= 100;
    if (enemy1.health < 0) return enemy1.scream;
    if (enemy2.health < 0) return enemy2.scream;
    if (enemy3.health < 0) return enemy3.scream;
  },
  machete: function(enemy) {
    enemy.health -= 500;
    if (enemy.health < 0) {
      console.log("Stick Around!")
      return enemy.scream;
    }
  },
  dynamite: function(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7) {
    enemy1.health -= 250;
    enemy2.health -= 250;
    enemy3.health -= 250;
    enemy4.health -= 250;
    enemy5.health -= 250;
    enemy6.health -= 250;
    enemy7.health -= 250;
    if (enemy1.health < 0) return enemy1.scream;
    if (enemy2.health < 0) return enemy2.scream;
    if (enemy3.health < 0) return enemy3.scream;
    if (enemy4.health < 0) return enemy4.scream;
    if (enemy5.health < 0) return enemy5.scream;
    if (enemy6.health < 0) return enemy6.scream;
    if (enemy7.health < 0) return enemy7.scream;
    console.log("HAHAHAHA!");
  }
}
```

Wow that's a lot of info - extremely specific stuff here. When creating a singular entity (such as Arnold Schwarzenegger - the GOAT of action stars) object literal notation is absolutely fine.

Adding properties (including methods) is a piece of cake, too - let's review by adding a property called `buzzsaw` and assigning it to the string `"He had to split!"`

**Does anyone know how to do this?**

Before you check your answer, go ahead and leave `Arnold.` in your console. Wow, did WE create all those properties!?

Of course not! This is inheritance and something called the _prototype chain_! Every object has a secret link to the _prototype_ object of its parent object, generally a constructor. The properties of that object (the prototype object) are made available to the child object.

Confused? It's ok, let's take a closer look at _Arnold_ in the console. 

Type in `Arnold.constuctor`. **What did you get?**

What this is telling us, is that using object literal notation to create new objects is just a shortcut for calling `var Arnold = new Object();`.  So myObj was actually created by the Object() constructor function! We simply added properties within it, much like adding the buzzsaw property.

Now, Arnold looks undoubtedly good here, but what's an action movie without some disposable Henchmen?

Some of Arnold's moves are going to effect as many as 7 enemies - are we going to have to write 7 different objects?! There MUST be an easier way!

Here's where __Constructor Functions__ come in! 

## Introducing Constructor Functions

Let's look at a Henchman object written in object literal notation.

```
var henchman = {
  health: 20,
  puny: true,
  scream: "AHHH!!",
  alarm: function() {
    alert("Intruder!!");
  }
}
```

Pretty boring if all the henchmen are like this - so let's make a variable constructor function!

Your first hint here is that it's called a constructor FUNCTION. Instead of opening up an object, we'll be creating them with a function!

```
var Henchman = function() {
	this.puny = true;
	this.alarm = function() {
		alert("Intruder!");
	}
}
```

What did we just write!? Let's find out - in your console, go ahead and type in:

```var Bennet = new Henchman();```

We now have a henchman named Bennet! Calling Bennet.alarm() will expose our brave Arnold!

**Who knows how to create another henchman using this function?**

But every henchman is not EXACTLY the same - so let's make this a little more variable and add some fields to this constructor function.

```
var Henchman = function(scream, health, puny) {
	this.scream = scream;
	this.health = health;
	this.puny = puny;
	this.alarm = function() {
		alert("Intruder!");
	}
}
```

Lets try and create a new henchman:

```
var thulsaDoomDrone = new Henchman("HISSSSSSSS!", 100, true);
```

Now try and type in `thulsaDoomDrone.scream`

What we've done is create a variable constructor so Arnold can mess with all these henchmen, puny or otherwise.

And in case you're curious, these new henchmen also have access to all the other Object properties, all thanks to the prototype chain!

__What are some other properties we could add to our henchman constructor function?__

## Using Prototype to Save Memory 

Say I want to create a method on my new constructor function - something that's not a simple getter/setter method, but actually changing data. To save memory, we'll add the method to the constructor function's prototype object!

__Why do I have to use this prototype on the constructor!?__

"Totally Recall" the prototype chain - because there is only a single copy of the constructor function in memory, by moving our object's methods to the prototype of the constructor, there will be only one copy of those functions, instead of one for each of the objects created with the henchman constructor function!

```
Henchman.prototype.fire = function (mrUniverse) {
	mrUniverse.health -= 100;
	if (mrUniverse.health <= 0) {
		mrUniverse.puny = true;
		return mrUniverse.complain;
	}
}
```
Now, when we create a henchman:

```
var Richter = new Henchman("Waaaaaaaaaoooahhhhh!!", 500, false);
```

And call `Richter.fire(Arnold);` - our main man has been shot! If you want to exact revenge on Richter, go ahead and call `Arnold.machete(Richter)`!

Not only does this new Henchman have the method, but any previously created Henchman as well!

Try `thulsaDoomDrone.fire(Arnold);` 

MAN, can Arnold take a bullet, or what!?!

Let's create another method together to get the hang of this prototype thing - and this time, let's really test Arnold's mettle. Can Arnold take a nuclear bomb?

**How do I add a method called "nuke" to the Henchman prototype that drains 10000 of Arnold's "health" property?**

Take a look at the previous function to get an idea.

```
Henchman.prototype.nuke = function(conan) {
	conan.health -= 10000;
	if (conan.health <= 0) {
		conan.puny = true;
		return conan.complain;
	}
}
```
Try and call the function against Arnold. Great, now he's being a diva!

Again, this method is available to all objects created with the Henchman constructor function.

## Arnold the Machine

__Now it's your turn to create a constructor function with custom methods!__ 

Create your own `terminator` constructor function and make the Arnold object into a variable constructor function. 

Use the prototype of the constructor to create the methods punch, shotgun, machete, and dynamite.

_Bonus_: Create a hero constructor function from scratch with different abilities. Make a Sylvester Stallone and Jean-Claude van Damm based on the same hero constructor!

## Arnold.hasta

"Hasta la vista... baby."

Today, we learned all about constructor functions and custom methods using the prototype chain. Remember that this will lead to writing SIGNIFICANTLY less code and will help you save a ton of memory in your programs.

We learned how to access properties through the prototype chain and why they're essential to OOP.

#### References

[Beautiful Response on the Value of Prototypal Inheritance](http://stackoverflow.com/questions/2800964/benefits-of-prototypal-inheritance-over-classical)

[Wikipedia - Object Oriented Programming](http://en.wikipedia.org/wiki/Object-oriented_programming)

[Solution code](https://github.com/EARnagram/prototypal_inheritance_js/blob/master/solution_code.js)