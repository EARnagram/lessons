# The Billy Mays Tribute Salesmen Collective

![Billy Mays](http://www.tampabay.com/resources/images/dti/rendered/2008/06/b4s_bug060608_26262a_8col.jpg)

## Responsive CSS

| Lesson Objectives - SWBAT                |
| ---------------------------------------- |
| Describe media queries and how to write them |
| Create rules that adjust styles for phones, tablets, and computers |
| Describe mobile first design             |
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

Due to the rise in use of these alternatives, many developers have considered planning for the smaller devices before they design for the desktop. 

Why? Lets look at a few facts (taken from codemyviews.com):

- There are over **1.2 billion** mobile web users worldwide
- In the U.S., 25% of mobile Web users are mobile-only (they rarely use a desktop to access the web)
- Mobile apps have been downloaded 10.9 billion times
- Mobile device sales are increasing across the board with over 85 percent of new handsets able to access the mobile Web

Due to these reasons - and big shot, Eric Schmidt claiming it was the future for Google - a lot of people are considering this a viable option.

Now there are plenty of positives and negatives to each design approach, but they boil down to this  pithy saying: ***Graceful Degradation vs. Progressive Enhancement***.

**Graceful Degradation**: Desktop first. Explore the full capabilities of a desktop and remove selectively, cutting away the fat and leaving an elegant core.

**Progressive Enhancement**: Mobile first. Start with the most core features first, then add features as they become necessary.

For the most part, *mobile first design is "better"*.

I put this in quotes because while it makes you solve the difficult task of a responsive design with a limited real estate first, **it makes you solve the difficult part first**.

Solving the limiting, difficult aspects first can be a negative for creativity! Some developers feel it gets in the way of their best design motives.

Since we're learning, we'll be doing today's lesson as a *Graceful Degradation*, but stay open to the idea of mobile first design in future projects.

##### Assets for Lesson

Go ahead and copy the `starter_code/` directory out of the repository. We'll be working in that for the class.

## Navbars with Floats

Floats are the old school method to creating a well-spaced, responsive navbar. Recall that floats and clears are used in tandem to place html elements to the left or right of a webpage.

Therefore, we're going to need a fair amount of margin and padding play to figure out the best spacing for our navbars.

Lets look at the top navbar in the `starter_code/`.

First, lets isolate and examine the code already written for our website:

``` CSS
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

``` CSS
nav .nav {
  display: inline-block;
  margin: 20px auto;
}
```

We're changing the display to ease our use of floats. Now, we'll float the `.nav-strong` element left, and the `.nav-menu-items` right.

We'll need to add padding to the left of each of the `.nav-menu-items` `<li>` elements so they don't bunch up on one another.

``` CSS
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

Let's get that top Navbar to stack above our `<header>` when the webpage has a width under 600px.

To do this, we'll need to use a **media query**. 

> "A media query consists of a media type and at least one expression that limits the style sheets' scope by using media features, such as width, height, and color."
> 
> — Thanks MDN

Essentially, you're telling the webpage to treat content differently according to a certain property.

In general, this is f

``` CSS
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

``` CSS
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

You are now an honorary Billy Mays Tribute Salesperson. Please share your responsive wares across the Internet responsibly.

But a few questions before we leave:

1. What is mobile first design and how does it relate to responsive CSS?
2. Explain the differences between `align-content`, `align-items`, and `justify-content`?
3. What's the difference between a flex child and flex parent attribute?

#### References

[Mobile First Design: Why It’s Great and Why It Sucks](https://codemyviews.com/blog/mobilefirst)

[MDN Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

[CSS-Tricks Complete Guide to FlexBoxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

[Flexbox Properties Demonstration](http://codepen.io/justd/pen/yydezN?editors=1100)

[CSS FlexBox Essentials](https://www.youtube.com/watch?v=G7EIAgfkhmg)

[CSS FlexBox Practical Examples](https://www.youtube.com/watch?v=H1lREysgdgc)