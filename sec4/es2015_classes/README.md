# BLADE RUNNER

![](http://i.kinja-img.com/gawker-media/image/upload/lds5kn7tzjpcnteppyrv.jpg)

## ES2015 Classes

| Lesson Objectives - SWBAT            |
| ------------------------------------ |
| Use ES2015 classes                   |
| Extend a class                       |
| Make a getter and setter             |
| Create static methods                |

##### Road Map

1. Class Syntax
2. Extending a Class
3. Using `static`, `get`, and `set`

---

Today we'll be learning about ES2015 classes with one of the most 
classist societies I know of, ***2019 Los Angeles***!

#### From Constructors to Classes

ES2015 brings us one of the most righteous additions JS could get - we 
can now move away from constructor functions and use classes instead!

### Class Syntax

Let's begin with a familiar constructor function.

```javascript
function Eye(color, size) {
  this.color = color;
  this.size  = size;
  this.temp  = -80;
}
```

To define a class, we need to first make a constructor method within our 
new class.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }
}
```

But what about the `prototype` object on the constructor?

```javascript
function Eye(color, size) {
  this.color = color;
  this.size  = size;
  this.temp  = -80;
};

Eye.prototype.roboTears() {
  console.log(`You wouldn't know if my ${this.color} eyes are cryin'.`);
}
``` 

We define other methods directly underneath. Under the hood, these 
methods are attached to the prototype of the constructor function (which 
is the class).

Notice we __do not__ use comma delimiting for methods.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }

  roboTears() {
    console.log(`You wouldn't know if my ${this.color} eyes are cryin'.`);
  }
}
```

### Extending Classes

![Eyes](http://vignette2.wikia.nocookie.net/bladerunner/images/2/2f/BladeRunner_Voigt-Kampff_machine.jpg/revision/latest?cb=20051217125212)

We all know that Androids were modeled after humans - therefore, a lot 
of the design was done by a mirror!

Luckily, in es2015 we can `extends` a class and use it for another.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }
  roboTears() {
    console.log(`You wouldn't know if my ${this.color} eyes are cryin'.`);
  }
}

class Camera extends Eye {
  // ...
}
```

We can make super class calls with `super`. `super` allows to specify 
functions defined on our object's parent (the class we extended).

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }

  roboTears() {
    return `You wouldn't know if my ${this.color} eyes are cryin'.`;
  }
}

class Camera extends Eye {
  constructor(color, size, brand) {
    super(color, size);
    this.temp = 50;
    this.brand = brand;
  }

  roboTears() {
    return `I can't say "${super.roboTears()}"… my ${this.color} lens cannot cry.`;
  }
}
```

### Using `static`, `get`, and `set`

The `static` keyword defines a static method for a class. Static methods 
are called on the class, not on the instances of the class!

Static methods are often used to create utility functions for an 
application.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }

  static colorMix(a, b) {
    let combineColor = a.color + b.color;
    return `I want ${combineColor} eyes!`;
  }
}

const eye1 = new Eye("blue", "L");
const eye2 = new Eye("gray", "M");

console.log(Eye.colorMix(eye1, eye2));
```

`get` and `set` are getters and setters for es6 classes! You can add 
logic to changing and/or accessing a property.

``` javascript
class Eye {
  constructor(color, size) {
    this.color = color;
    this.size = size;
    this.temp = -80;
  }

  set ruin(num) {
    if (num > 0) {
      this.temp = num;
      this.color = "gray";
    } else {
      throw new Error(`${num} degrees is perfect for these eyes!`);
    }
  }

  get medSize() {
    if (this.size === "M") {
      return "Medium.";
    } else {
      return "I'm a weird eye."
    }
  }
}

var lens = new Eye("blue", "M");

var bigLens = new Eye("green", "L");

console.log(lens.medSize, bigLens.medSize);  // "Medium." "I'm a weird eye."

lens.ruin = 20;

console.log(lens.color); // "gray"

bigLens.ruin = -10; // Throws error
```

#### References

[MDN ES2015 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

[ES2015 Classes and Future Proposals](http://h3manth.com/content/classes-javascript-es6)
