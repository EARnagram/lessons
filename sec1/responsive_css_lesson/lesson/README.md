# The Billy Mays Tribute Salesmen Collective

![Billy Mays](http://www.tampabay.com/resources/images/dti/rendered/2008/06/b4s_bug060608_26262a_8col.jpg)

## Responsive CSS

| Lesson Objectives - SWBAT                |
| ---------------------------------------- |
| Describe media queries and how to write them |
| Create rules that adjust styles for phones, tablets, and computers |
| Describe mobile first design |
| Use `display:flex` for a responsive design |
| Manipulate flexible boxes with `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, and `align-content` properties |

#### Road Map

1. Billy Mays Here - Intro to Responsive Website Design
2. Using Floats with Navbars
3. Media Queries & Max/Min Width
4. Using the Flex Box
5. But Wait, There's More!

## BILLY MAYS HERE!

> ARE YOU TIRED OF YOUR DESIGNS GOING DOWN THE TUBE AS SOON AS SOMEONE OPENS UP YOUR WEBSITE ON A PHONE!?!?!?!?!
>
> WELL, THROW THOSE WORRIES OUT THE DOOR!
>
> WELCOME TO RESPONSIVE CSS!

![](http://api.ning.com/files/Kk19*2P3xgYqiykJv8EedsK8vZPAaTdJWxTjdO7cYG6obt10sE-tzo0IKGJqFHkfSFqP2-KSn8BJHaV9CnhOfB*Kkzs*ZOX*/BillyMaysPWNSGod.JPG)

#### Intro to Responsive Website Design

Once upon a time, long, long ago, nearly every screen was either 640x480, 800x600, or 1024x768, and you could expect that people had most of their screen occupied by a broswer window.

Those were the good old days when Billy Mays (RIP) was still slinging his helpful wares. It's up to us as part of the Billy Mays Tribute Salesmen Collective to followin his footsteps and spread the good word on responsive design.

Now, people will be looking at our websites on phones, tables, browser windows scrunched up all tiny, and maybe even watches (please remember this lesson; it'll be funny to go back and read this README in a few years and ask: "Who the hell is Billy Mays??"). 

You can compare the difference - just resize the width of your browser window:

- [Limited Responsiveness](https://streetcleaner.bandcamp.com/album/payback)
- [Fully Fledged Responsiveness](http://www.piedpiper.com/)

It's your responsibility, as the web developer, to make your site work as well as you can for as many people as you can– including people viewing on phones, tablets, and yes, even watches.

#### Mobile First Design

Go ahead and copy the `starter_code/` directory out of the repository. We'll be working in that for the class.

## Navbars with Floats

Floats are the old school method to creating a well-spaced, responsive navbar. Recall that floats and clears are used in tandem to place html elements to the left or right of a webpage.

Therefore, we're going to need a fair amount of margin and padding play to figure out the best spacing for our navbars.

Lets look at the top navbar in the `starter_code/`.

First, lets isolate and examine the code already written for our website:

```CSS
/* Top Navbar */

nav {
  max-width: 90%;
  margin: 0 auto;
}

nav ul {
  padding: 0;
  margin: 0 auto;
}

/* Large Header */

header {
  clear: both;
  continued…
}
```

We've centered the `<nav>` and `<ul>` element, given it a maximum width of 90% of the page, and removed any additional padding inserted by the browser.

Be aware that the element beneath the navbar has already been given a clear.

In order to space our page correctly, and get the navbar to move with the resizing of the window, we'll have to add floats to our elements. First, lets center our `<li>` elements by accessing the class `.nav`, and change it's display to `inline-block`.

```CSS
nav .nav {
  display: inline-block;
  margin: 20px auto;
}
```

We're changing the display to ease our use of floats. Now, we'll float the `.nav-strong` element left, and the `.nav-menu-items` right.

We'll need to add padding to the left of each of the `.nav-menu-items` `<li>` elements so they don't bunch up on one another.

```CSS
nav .nav-menu-items {
  float: right;
  padding: 0 0 0 20px;
}

nav .nav-strong {
  float: left;
}
```

Now, you'll see that the navbar elements will respond well to the resizing of the browser (until the browser is under about 600px...).

## Media Queries and the Min/Max Width

Let's get that top Navbar to stack vertically above our `<header>` when the webpage has a width under 600px.

```CSS
/* ------------- */
/* Media Queries */
/* ------------- */

@media (max-width:600px) {
  nav .nav {
    display: block;
    float: none;
  }

  nav .nav-menu-items {
    padding-left: 0;
  }
}
```

## Using the Flex-Box

```CSS
/* --------------------------- */
/* Using Display Flex */
/* --------------------------- */

main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

main > div {
  max-width: 260px;
  padding: 5px;
}

/* ------------------- */
/* Navbar with FlexBox */
/* ------------------- */

footer > ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 0 0 10px 0;
  padding: 0;
}

.flex-grow-class {
  padding: 8px;
}

.flex-grow-class:nth-child(1) {
  flex-grow: 1;
}

@media (max-width:600px) {
  footer > ul {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

## But Wait, There's More!

You are now an honorary Billy Mays Tribute Salesperson. Please share your responsive wares across the Internet.

But a few questions before we leave:

1. What is mobile first design and how does it relate to responsive CSS?
2. Explain the differences between `align-content`, `align-items`, and `justify-content`?
3. Name the 5 (or 6) flex children CSS properties?

#### References

[CSS-Tricks Complete Guide to FlexBoxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[MDN Using CSS Flexible Boxes](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

[Flexy Boxes Playground](http://the-echoplex.net/flexyboxes/)

[Flexbox Properties Demonstration](http://codepen.io/justd/pen/yydezN?editors=1100)

[A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

[CSS FlexBox Essentials](https://www.youtube.com/watch?v=G7EIAgfkhmg)

[CSS FlexBox Practical Examples](https://www.youtube.com/watch?v=H1lREysgdgc)
