# The Library of Babel

![Library](http://cdn8.openculture.com/wp-content/uploads/2015/04/26191012/Red-Book.jpg)

## Consuming 3rd Party APIs

| Learning Objectives - SWBAT |
| :--- |
| Define and Differentiate a RESTful Web API |
| Explain why we use APIs |
| Difference between producing, exposing, and consuming API |
| Use `request` npm to access a (RWS)API |
| Read API documentation |
| Explain XDR/CORS |
| Explain JSON |

#### Road Map
1. Enter the Library of Babel, Man of the Book - Intro to RESTful Web 
   Services
2. Exposing the API
3. Consume API
4. Practice - GitHub API
5. Outro

## Enter the Library of Babel, Man of the Book

Borges wrote of a universe in the form of a [library](https://libraryofbabel.info/).
In this universal library is a labriynth of hexaganol rooms, each 
containing 4 walls of books, each 410 pages in length. If infinite, 
it's said that all iterations of 410 pages in length were present in 
the library, and if that were true, there could be one _messianiac 
deliverer_ that has read _the one book_ that catalogs the entire 
libary.

By the end of this lesson, I hope that you are that __"Man of the 
Book"__, that can lead us to the "legible books" of the internet.

#### Using RESTful Web Services
Web APIs, or RESTful Web Services, can feel a lot like the Library of 
Babel, but in practice, are significantly easier to naviagate than the 
fictional tower of babel.

If only Borges' library had followed RESTful routing principles!

But before we go into routing, __take 2 minutes__ to research what 
an API really is.

> What did you get?!

I bet you found a bunch of stuff that made little or no sense to you. 
That's because an API refers to many different things in computing,
however, they all mean about the same thing.

Application Programming Interfaces essentially define how you can use
(interact with) any program or object on a computer. For instance, an
Array in JS - the API is a collection of methods, eg. push, shift, 
forEach, etc.

In our class, and in your life as Web Developers, you'll hear people 
say APIs a lot, however, what they mean are [Web APIs](https://en.wikipedia.org/wiki/Web_API),
specifically RESTful Web Services.

The best explanation I've heard of a Web API:
#### Computers use Web APIs, the way a human uses a website.
<img src="http://cdn2.business2community.com/wp-content/uploads/2013/12/Robot-on-phone-with-caption-and-lipstick-iStock_000027629337Small.png" alt="sassy compy" height=300px>

In the same way we go to a site's contact page, and parse through
the data to find the phone number to tell that restaurant that they
screwed up your ravioli AGAIN, a computer uses a RESTful endpoint of 
an API to access data.

However, unlike humans, computers don't need (or want) any of the 
extra nonsense we humans call styling. Only the raw data is necessary
in these APIs.

<img src='http://workshops.lewagon.org/assets/tech-entrepreneurs/web-api-8a6605a7574f6aad09970f6c79508a0d.png' alt='KISS4Compy' height="400px">

Earlier today, we've seen how to create an API. Now we're getting
into producing/exposing and consuming APIs.

## Producing the API

<img src="http://4.bp.blogspot.com/-ZvSVnglHPEU/VLIlHh3k0dI/AAAAAAAAHmk/pK12MRmcc0Y/s1600/Eniac.jpg" alt="open server" height=400px>

You can access a RESTful web service (otherwise known as producing 
or exposing the API) in a similar fashion to finding a book in a
well-organized library.

__Imagine you're in middle school__:

- Your teacher gives you an assignment to write a paper about the
  Civil War.
- You go to your library called 'http://api.websterms.edu/lib'
- you then look in the '/history' section and...
- find the dewey decimal number for military history '/435'
- then extract only books on the civil war in '/civilwar'
- then find the exact book you needed by id '/45'

You've just hit an equivalent of an API endpoint:

`http://api.websterms.edu/lib/history/435/civilwar/45`

Now this is not a real website, but you'll see RESTful sites with a
similar structure. We access APIs using HTTP requests, much like the 
one we used in our Rails projects.

#### Accessing APIs

We can access an API in many different ways:

1. From the terminal, we can use cURL (`curl`)
2. From the browser (a desktop GUI for HTTP requests)
3. Asyncronously from our node server using the `request` node package
4. Asyncronously "from" our client-side using AJAX requests

Today we're going to focus on `request`.  AJAX can become difficult to 
manage due to its asynchronous nature and seemingly magical quality of
overriding usual __XDR__ / __CORS__ protection.

#### Carrajo, more acronyms?

Yes. Get used to - programming loves a cute acronym.

__XDR__ - Cross-Domain Request

- a way to make anonymous requests to third-party sites that support 
  XDR and opt in to making their data available across domains

__CORS__ - Cross Origin Resource Sharing

- A resource makes a cross-origin HTTP request when it requests a
  resource from a different domain than the one which served itself.

CORS are the protocol for how an XDR is made.

## Consume API - Find the Pokedex!

![pokedex](https://s-media-cache-ak0.pinimg.com/236x/f7/f1/93/f7f1933d305c2e2d83bf67f570146b3e.jpg)

If all books exist in Borges' Library of Babel, then there be a pokedex 
in there somewhere!

Let's use the starter code to learn how to use the `request` module.

When we manipulate and utilize data from outside sources, we are 
_consuming_ the API. In this case, we're using the [PokéAPI](http://www.pokeapi.co/).

We'll also be using the module `locus` for line injections (like
`binding.pry`), and the module `opener` to pull up data in our 
default browser.

This is what we're going to do:

1. Catch them all!
2. Start out with bulbasaur.
3. Access bulbasaur from our original pokedex.
4. Open a sprite of bulbasaur from our bulbasaur data.

## Practice with the GitHub API

<img src="https://help.github.com/assets/images/site/be-social.gif" alt="github">

Everyone take 5 minutes to review the [GitHub documentation](https://developer.github.com/v3/)
with your partner/s.

After you've reviewed the docs, complete the following:

1. Produce/Expose GitHub issues GitHub issues from last project week
   with `curl`!

2. Now consume the API data of an issue and use it to access one of 
   the instructor's github accounts (don't be [black hats](https://en.wikipedia.org/wiki/Black_hat)!).
   
3. Access your partner's project 2 commit log.

4. BONUS: See if you can produce earnagram's "bio" using cURL
	- You'll need to `brew install jsawk`.
	- You'll also need to use the `--silent` flag instead of `-i`
	- Last, you'll need to use `jsawk` by piping in ( ` | ` ) the
	  following: `jsawk 'return this.bio'`

5. DOUBLE BONUS: Change your own bio github bio using `PATCH`!

## You Must be The Man with the Book!
<img src="http://entertainment.inquirer.net/files/2012/10/arnold-schwarzenegger-total-recall-book.jpg" alt="arnold book" height=300px>

Congrats, you've officially become the Messianic Book Person!

You now contain the necessary know how to move through the labriynth 
of RESTful Web Services!

Let's review:

> What is an API?

> What is CORS?

> Name and explain the 4 ways we access web APIs.

## References
[GitHub API Docs](https://developer.github.com/v3)

[Request npm](https://www.npmjs.com/package/request)

[Request github](https://github.com/request/request#custom-http-headers)

[Web API Wiki](https://en.wikipedia.org/wiki/Web_API)

[PokéAPI](http://pokeapi.co/docs/)

[Codecademy API Lessons](https://www.codecademy.com/apis)
