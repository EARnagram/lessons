# Codemorphs

![adele](http://25.media.tumblr.com/tumblr_m78scfAIxl1rsyc9mo1_1280.jpg)

## Tooling in React with Webpack

| Learning Objectives - SWBAT                 |
| :------------------------------------------ |
| Explain the use case for Webpack            |
| Use loaders to assist in React development  |
| Configure Webpack using HTML Webpack Config |
| Output bundled JS for development server    |
| Explain devDependencies in `package.json`   |
| Describe a task runner and its use cases    |
| Describe a code bundler and its use cases   |

#### Road Map

1. Morph My Code
2. What is Webpack?
3. Package Bundlers vs. Task Runners
4. Setting Up Webpack
5. Outro

## Morph My Code

![Aximili-Esgarrouth-Isthill](http://img06.deviantart.net/289d/i/2012/136/e/e/aximili_esgarrouth_isthill_by_alex_gone_loco-d501r9g.png)

Aximili-Esgarrouth-Isthill, aka Ax, happened to be one of my previous 
students. He took to code very similarly to animals - he could morph
any code he touched!

He decided to let the world in on his technique, and authored webpack 
under the psuedonym Tobias Koppers :wink:

## What is Webpack?

Webpack is a code or module bundler. It is designed to run through all 
of a package's dependencies and concatenate their source into one file 
that (ideally) can be used in a browser.

More simply: it takes your code as input, transforms it, repackages (or 
bundles) it, and returns brand new code.

#### Why would I want to alter my code?

Don't think of it as altering, but as _configuring_ your code.

When do you think we need to do so?

> - Using a new tech that depends on features not yet implemented in the 
>   browser
> - Minification, uglification, and other obfuscation and optimization 
>   tactics.
> - Transpiling from one language to another (like SASS to CSS). 

Webpack is becoming paramount to modern web development - we use so many 
libraries that are designed to run with Node.js and the V8 compiler, 
that we need an HQ for pulling it all together, and making sure they all 
communicate nicely.

## Task Runners vs. Module Bundlers

If ever there was a lopsided circle in the form of a venn diagram, the
differentiation between Module Bunders and Task Runners are it.

We've used one build tool already, Rake, that can be considered a task
runner. There are also some very popular JS task runners like Grunt and
Gulp.

__Task Runners__ are used to create tasks that help developers in the 
build process. Think about `rake db:migrate`. There's probably a small 
file/s related to all the operations that occur when we migrate our 
migration files, but they boil down to one simple command.

Task runners rarely have anything to do with the actual run-time of the 
app. They are used primarily for development. They transform and/or put 
files, configs and other things in place so that the run time works as 
expected.

__Code Bundlers__ on the other hand, are designed to run through all
of a package's dependencies and concatenate their source into one file
that can be used in a browser. However, modern code bundlers are 
becoming so powerful, that they've begun to blur the lines.

Additionally, the term "Code Bundler" is relatively new. Browserify, 
Webpack, and a few others hit the scene in the early 2010s. These are 
the first of their kind, so they may be the "square" to the "Build Tool" 
"rectangle".

#### Can you use Task Runners with Code Bundlers?

Of course you can!

It may take some time to set up, but there's no reason to stop you from
using them together in your development process.

Because Code Bundlers are so new, you may find a lot of functionality 
you need has not yet been created. Therefore, in highly-complex 
applications you may find you need both.  For reference, there's around
100 transformers for webpack and browserify, and over 2000 gulp plugins
on npm. Gulp and Grunt have simply been around longer.

However, for our purposes, we will only need webpack (until we work with
React Native).

## Setting Up Webpack

We'll be using webpack throughout the rest of the course, and probably
the forseeable future as developers. Therefore, we'll install webpack 
globally.

```bash
npm install -g webpack
```

Now, we'll start a new node project within our `/starter` with 
`npm init`. Let's call it "webpack_tooling".

#### Development Dependencies

In our careers as developers, we will often use modules that only assist
us in the development process.

Recall from Ruby on Rails, our gemfile using production and development
specific gems.

```ruby
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in 
  # the background. Read more: https://github.com/rails/spring
  gem 'spring'
end
```

We actually have the same capability in our `package.json`!

They're referred to as `devDependencies`. We install them in *__almost__*
identical fashion to regular dependencies:

```bash
npm install --save-dev package-name
```

Notice that when we save, we append `-dev`.  This means, those 
dependencies will __not__ be included in our production server!

#### Install All of Our Dependencies

Today, we'll be introducing a ton of dependencies, and in order to use 
them, we must first install them.  Copy the lines below to your 
terminal:

```bash
npm install --save-dev babel-core babel-loader babel-preset-es2015 css-loader sass-loader style-loader webpack webpack-dev-server

npm install --save node-sass
```

We'll go through each dependency as we go through the lesson, but for 
now, just know that each of these gives an extra piece of functionality
to ease the development process of our given project.

#### Webpack Configuration

All of webpack's configuration is always stored within a file called:
`webpack.config.js`. Go ahead and `touch webpack.config.js` at the base
of your project directory in terminal.

Go ahead and `subl` the directory and open up that new file.

Let's go ahead and start by requiring the necessary modules:

```javascript
var path = require('path');
var webpack = require('webpack');
```

> What is the `path` module used for?

All webpack configurations are made in a JS Object (sometimes referred
to as a configuration object).

At the end of the file, go ahead and add:

```javascript
module.exports = {};
```

Let's think about the three primary things Webpack would need to know 
to assist us:

1. The starting point, or root file of our project.
2. What transformations must be made on our code.
3. Where the transformed code shoud be saved.

Now we'll add in the necessary keynames. While every project may require
a slightly different webpack configuration, these fields are always 
used.

```javascript
module.exports = {
  devtool: '',
  entry: [],
  output: {},
  plugins: [],
  module: {
    loaders: []
  }
};
```

##### Webpack Configuration Fields:

- `devtool` - Choose a developer tool to enhance debugging.
- `entry` - Entry point for code bundling. If given an array, all 
            modules are loaded upon startup and the last one is 
            exported.
- `output` - Give options to how you want to output the newly bundled 
             code.
- `plugins` - Add additional functionality using webpack plugins.
- `module` - An object to specify which transformations to make
  - loaders - The dependency modules used to transform code.

Each of these fields has much more within it, but this should give you a 
basic overview of the anatomy of a barebones webpack build.
















