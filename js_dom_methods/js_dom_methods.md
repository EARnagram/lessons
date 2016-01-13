##Javascript and the DOM

####Document

When we are accessing the DOM, we will do so by referencing the **document** object.

```javascript
var doc  = document;
```
This **document** object is a global variable, meaning it's accessible from any javascript code running on the web page. In general, when we write our own javascript code we very much want to stay away from declaring global variables, lest they interfere with **document** or other variables in the global scope. In general:

```javascript
//do this, declare a local variable
var myVar = 1;

//don't do this (forget the var), which declares a local variable
myVar = 1
```


####Selector API

The selector API is the arm, by which javascript can grab and work with elements in the DOM tree. Remember, the DOM is a hierarchy of nodes. This is a key point to keep in mind as we work with the different selectors. 


#####Basic Selectors


* **getElementById** - Get an element given it's ID

```javascript

/* This would return the node for an HTML element looking like:
   <div id="aDiv" >Text in here</div> 
*/
var aDiv = document.getElementById("aDiv");

```

* **getElementsByTagName** -Get all elements by Tag Name

```javascript

// Will return a NodeList of all the elements that are <div>
var divs = document.getElementsByTagName("div");

/* the [0] allows us to indicate at which index in the nodeList
 we would like to retrieve an element. */
var firstDiv = document.getElementsByTagName("div")[0];

```

* **getElementsByClassName** -Get all elements by class name. This is a common and very popular selector. 

```javascript

/* Will return a NodeList of all the elements that have
   a class of blue like these <li> elements below: 
     <ul> 
        <li class="blue">Item 1</li>
        <li class="blue">Item 2</li>
     </ul>  
*/
var blueClass = document.getElementsByClassName("blue");

/* we can also use an index to retrieve a specific
   element */
var firstBlue = docuemnt.getElementsByClassName("blue")[0];

```

* **classList** -method to easily add and remove classes

```javascript
var elem = document.getElementById('myElement');

//remove a class name 'aClass' 
elem.classList.remove(“aClass); 

// add it back
elem.classList.add(“aClass”); 

/* toggle will add the specified class if not present
   and remove it if it is present.
   In this case, since we added it above, it will be
   removed. 
*/ 
elem.classList.toggle(“aClass”); 

// check if 'aClass' is present
if (elem.classList.contains(“aClass”){
   //if it is, remove it
   elem.classList.toggle("aClass");
}

```
* **getElementByName** - Get an element given it's name attribute

```javascript

/* This would return the nodes for an HTML element looking like:
    <input type="radio" value="1" name="team"> 
    <input type="radio" value="2" name="team">
*/
var inputs = document.getElementsByName("team");

```

######Query Selector Method

The query selector method allows us to grab an element from the DOM using CSS selectors. It will return only the first match.  

> Remember that when document is used, it will try to match from the entire page, if an element is used, only descendants of that element will be matched. 

```javascript
//with no preceding punctuation, the string "body" is interpreted
//as an element name
var body = document.querySelector(“body”);

// get first element with a class of “selected”
var blue = document.querySelector(“.blue”);

// get the element with the ID “container” 
var container = document.querySelector(“#container”); 
    
//using query selector on an element searches only children of that 
//element
var childSubElement = container.querySelector("#sub-element");

// get first image with class of “button” 
var img = document.body.querySelector(“ img.button”); 
```

######Query Selector All Method

This method takes the exact same argument as above, however it will return all matches. It does this by returning a NodeList object, if no elements are matched, an empty NodeList is returned. 

```javascript

//grab all of the div elements
var divs = document.querySelectorAll("div");

//this would grab all the tr(table row) nodes from the table with id
// "myTable"
var trs = document.getElementById(“myTable”).querySelectorAll(“tr”);

/*now iterate over the table rows
  NOTE: we declare len = trs.length inside the for loop for performance.
  Doing so alleviates the need to access the 'length' property of trs,
  which is a more expensive operation than storing the value in the 
  local variable 'len'. 
*/
var i, len; 
  for (i = 0, len = trs.length; i < len; i + +){ 
  
  //change each elements className to "rd";
    trs[ i].className = "rd";  
}
```

######Traversal
* **childNodes** - returns a nodeList for all the children of an element

```javascript

/* will return all the elements enclosed within
   the div's :
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div
*/   
var pTags = document.getElementById('aDiv').childNodes;

//we could grab just the first like this
var firstPTag = document.getElementById('aDiv').childNodes;
```
* **firstChild** - returns the first child element of a parent element

```javascript

/* will return all the elements enclosed within
   the div's :
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div
*/ 

//firstChild.innerHTML would  = 'Some text'
var firstChild = document.getElementById('aDiv').firstChild;
```

* **lastChild** - returns the last child element of a parent element

```javascript

/* will return all the elements enclosed within
   the div's :
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div
*/  

//lastP.innerHTML would  = 'Some more text'
var lastP = document.getElementById('aDiv').lastChild; 
```

* **nextSibling** - iterates to the next sibling in the nodeList

```javascript

/* will return all the elements enclosed within
   the div's :
   
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div
*/  

//iterate to the second node in the childnodes
var secondP = document.getElementById('aDiv').childNodes[0].nextSibling; 
```

* **parentNode** - returns the parent node of the current element

```javascript
/*
  <span> 
      <p id="text"></p> 
  </span>
*/

//return the parent of a certain element
var parentNode = document.getElementById("text").parentNode;

```

* **previousSibling** - iterates to the previous sibling in the nodeList 

```javascript
/* will return all the elements enclosed within
   the div's :
   
   <div id="aDiv">
      <p>Some text</p>
      <p>Some more text</p>
   </div
*/  

/*NOTE: this will throw an error because the first node in a   
  nodeList does not have a pointer to a previous node*/
var secondP = document.getElementById('aDiv').childNodes[0].previousSibling; 
```
######Getting and Setting Attributes

* **getAttribute** - get an attribute of an element

```javascript
/*
   <div id="myDiv" class="blue" >
   
   <input name="score" value="1">
*/

//grab attributes from above div
var aDiv = document.getElementById('myDiv');

var aDivId = aDiv.getAttribute("id");
var aDivClass = aDiv.getAttribute("class");

//grab attributes from above input
var input = document.getElementByName('score');

var inputName = input.getAttribute("name");
var inputValue = input.getAttribute("value");

```

* **setAttribute** - set an attribute of an element

```javascript
/*
   <div id="myDiv" class="blue" >
   
   <input name="score" value="1">
*/

//set attributes for above div
var aDiv = document.getElementById('myDiv');

var aDivId = aDiv.setAttribute("id","newId");
var aDivClass = aDiv.setAttribute("class","red");

//grab attributes for above input
var input = document.getElementByName('score');

var inputName = input.setAttribute("name","newName");
var inputValue = input.setAttribute("value","3");
```

* **hasAttribute** - iterates to the previous sibling in the nodeList

```javascript
/*
   We can test for the presence of any attribute
   
    <div id="myDiv" class="blue" >
*/

//set attributes for above div
var aDiv = document.getElementById('myDiv');

if (aDiv.hasAttribute("class")){
   //run some code

}

```

######Creating and Deleting elements

* **createElement** - spin up a brand spanking new html element...out of thin air no less

```javascript
/*
   We can easily create new elements 
   "div" is the element type we want to create,
   and is the only argument we pass to the method */
 
var newDiv = document.createElement("div"); 

```

* **createDocumentFragment** - create a node 

Document Fragments are important if you want to insert a bunch of html into a page. Since they exist in memory, and are not part of the DOM tree, appending nodes to them does not cause page reflow, which is a slow operation. 

```javascript


var newDiv = document.createElement("div");
var docFragment = document.createDocumentFragment();

docFragment.appendChild(newDiv);
```

* **appendChild** - spin up a brand spanking new html element...out of thin air no less

```javascript

  /*
       <div id="myDiv" class="blue" >
       NODE WILL BE INSERTED HERE, INSIDE THE NODE WE GRABBED
       </div>
  */


  var myDiv = document.getElementById("myDiv");
  
  //create new div, insert some text into it
  var newDiv = document.createElement("div"); 
      newDiv.innnerHTML = "Hey there"; 
  
  /* insert the new div into the DOM by appending it to 
     the node we retrieved above.*/ 
  myDiv.appendChild(newDiv); 

```

* **insertBefore** - insert a node before the current node in the DOM tree

```javascript
  /*
    <div>
       
       NODE WILL BE INSERTED HERE,BEFORE THE NODE WE GRABBED 
       <div id="myDiv" class="blue" >
    </div>    
  */


  var myDiv = document.getElementById("myDiv");
  
  //create new div, insert some text into it
  var newDiv = document.createElement("div"); 
      newDiv.innnerHTML = "Hey there"; 
  
  /* insert the new div into the DOM by appending it to 
     the node we retrieved above.*/ 
  myDiv.insertBefore(newDiv); 

```

* **insertAfter** - insert a node after a node in the current DOM tree

```javascript
  /*
    <div>
       
      <div id="myDiv" class="blue" ></div>
       NODE WILL BE INSERTED HERE,BEFORE THE NODE WE GRABBED 
    </div>    
  */


  var myDiv = document.getElementById("myDiv");
  
  //create new div, insert some text into it
  var newDiv = document.createElement("div"); 
      newDiv.innnerHTML = "Hey there"; 
  
  /* insert the new div into the DOM by appending it to 
     the node we retrieved above.*/ 
  myDiv.appendChild(newDiv); 

```

* **replaceChild** - remove the specified node completely from the DOM tree

```javascript
/* Replace a node with a new node
 */
// we will insert the new node into body
var body = document.getElementById('body');
var newNode = document.createElement('div').innerHTML = "Hey There";

var returnedNode = someNode.replaceChild( newNode, body.firstChild);

```

* **removeChild** - remove the specified node completely from the DOM tree

```javascript
/*
   <body>
      <div id="aDiv">
      </div>
   </body>

*/


// we'll now remove the div above from body
var body = document.getElementById('body');
var divToDestroy = docuement.getElementById('aDiv');

//remove the node
body.removeChild(divToDestroy);

```

####Exercises

1. Create an HTML **table** element with several rows and one column. The columns can be different names of fruit, cars..etc.

> Pull the table into your javascript code using a variable named 'myTable'. 

> Print to the console the innerHTML of the first child node. 

> Set the class of the first child node to 'red'. 

2. Create an **input** tag with a name attribute of "myInput", and a value of "1"

> Pull the input into your javascript code using a variable named "myInput"

> Set the value of the input to "4"

> Change the elements name attribute to "newName"

3. Create a **div** tag that has several **p** tag descendants. The **p** tags will all be siblings with a class equal to "p".

> Pull all the <p> tags into a variable named....pTags(yep we're super creative today)..using one of the methods above.

> Now do it with another method. 

> Do it again using the DOM Heirarchy. 

> Remove the first <p> tag. 

> Insert one back in to restore balance to the universe. 

> In a loop, and the text "I'm a paragraph node" into each <p> tag

4. Challenge point: Without googling and copy and pasting code,can you create a brand new table using javascript only, with the following structure:   

```html
<table>
  <thead>
    <tr>
       <th> Fruit </th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td>Pear</td>
    </tr>
    </tbody>
</table> 
```



##The End

:fireworks: :tada: