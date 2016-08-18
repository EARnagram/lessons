# All Bugged Up

<img src="http://www.scriptmag.com/wp-content/uploads/beetlejuice.jpeg" alt="Beetlejuice" width="600px">

## Debugging in JavaScript

Last night, you may have worked on nodeschool.io's javascripting 
tutorial.

I figured I could use the practice and did the same thing. However, I 
never checked my code while writing, and when I ran it, oh boy did I 
have some errors!

In today's exercise, do you think you could help me fix my code?

#### Assignment

- Go line by line, uncommenting as you go, and fixing the given problem.

- Use the tools below to help you find the error!

#### Getting Started

Inside `starter_code/` you'll find my `all_bugged_up.js`. We'll be using
this messed up file for today's exercise.

After opening up the `index.html` in the browser, you can ignore the 
html page and work solely in `all_bugged_up.js` and the Chrome console.

## Tools for Debugging:

<img src="https://avatars3.githubusercontent.com/u/6019716?v=3&s=300" alt="eslint">

#### ESLint

Linters check your code style and syntax. They can often find typos and 
errors that can be hard to see.

Companies use a robust linting configuration to ensure uniform code 
styles across the dev team.

In order to use linting, we'll first need to install eslint to our 
machines. In the terminal, enter:

`npm install -g eslint`

This has made eslint globally (`-g`) available in our computers.

Next, we'll need to get access to eslint in our text editor, Sublime.

Go ahead and type `⌘ + ⇧ + p` in Sublime. This keystroke brings up our 
"Command Palette."

Here we can install new packages to bring into our sublime. These 
packages often make our lives as developers infinitely easier. 

Look for the `Package Control: install package` option, select it, and 
search for `SublimeLinter` and `SublimeLinter-contrib-eslint`. Install
one after the other.

Afterwards, go to your terminal and type:

`touch ~/.eslintrc`

Next, open that file in sublime (in the terminal: `subl ~/.eslintrc`).

##### Paste the following code into it:

```json
{
  "env": {
    "browser": true
  },
  "rules": {
    "brace-style": 1,
    "camelcase": 1,
    "eqeqeq": 1,
    "no-mixed-spaces-and-tabs": 1,
    "no-undef": 1
  }
}
```

This is referred to as a configuration object. It sets the rules and 
common environment variables for our linter. Unlike a big company's
linter, this is an ultra lightweight configuration.

After saving this file, we should be able to use our linter by typing:
`^ + ⌘ + l`.

If you see any dots in the gutter of your editor (where the line numbers
live), that means there are errors that conflict with your rules in your 
configuration file.

If you'd like to read the errors in full, type `^ + ⌘ + a`.

And now you're linting your code!!

#### Chrome Dev Tools

If you can't figure out why something is messing up, and the linter 
isn't catching anything, often a great tool is the chrome debugger. 

Where linters help us with typos and code style, the chrome debugger 
helps us with logic issues and unexpected values.

![](images/all_bugged_up.png)

1. __Blue__  - You'll find the very useful debugging tool in the 
               __sources__ tab.
2. __Red__   - You can set break points to stop the code and play around 
               at that moment in run time!
3. __Green__ - Once you'd like to move on, you can click the 
               play button to "resume script execution".

Inside any function or statement, you can put `debugger;` (see example
below) and it will add a break point, pausing your parser at the moment 
in the code, so you can inspect the code in the chrome console.

```js
function whereIsHe(beetle) {
    var juice = "grody";
    debugger;  // this will create a break point!
};

whereIsHe("Got Him!");  // in chrome, we'll be able to view the values 
                        // of beetle and juice - pretty cool, huh?!
```

#### References

[ESLint](http://eslint.org/)

[Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/?hl=en)

---

#### tl;dr for eslint Installation

1. `npm install -g eslint`
2. Open Package Control: `⌘ + ⇧ + p`
3. Select `Package Control: install package`
4. Select and install: `SublimeLinter` and `SublimeLinter-contrib-eslint`
5. `touch .eslintrc`
6. `subl ~/.eslintrc`
7. Copy over the configuration object [above](#paste-the-following-code-into-it)
8. Save and close `.eslintrc`

#### Using ESLint:

You can select ESLint's appearance in the bottom of tools.

1. `^ + ⌘ + l` - Lint this view. Show the warnings and errors.
2. `^ + ⌘ + a` - View all errors. List each of ESLint's full complaints.
