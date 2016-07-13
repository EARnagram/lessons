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
  entry: [],
  output: {},
  plugins: [],
  module: {
    loaders: []
  }
};
```

> ##### Webpack Configuration Fields:
> 
> - `entry` - Entry point for code bundling. If given an array, all 
>             modules are loaded upon startup and the last one is 
>             exported.
> - `output` - Give options to how you want to output the newly bundled 
>              code.
> - `plugins` - Add additional functionality using webpack plugins.
> - `module` - An object to specify which transformations to make
>   - loaders - The dependency modules used to transform code.
> 
> Each of these fields has much more within it, but this should give you 
  a basic overview of the anatomy of a barebones webpack build.

##### __`entry`__

Webpack allows you to have one or many entry points. 

> Many entry points?!

That's right! If it helps, think of this as a list of things to check 
before carrying out whatever it is we're going to do. 

__Remember__: The last file is exported!

```js
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/js/index'
  ],
```

Our first two files are setting up a server. The first establishes a 
port location to serve the site (in our case http://localhost:8080), and 
the second ensures we'll use our hot dev-server. However, we'll need to 
create a `server.js` to use it.

### `server.js`

We'll need to step out of `webpack.config.js` for just a second.

Go ahead and `touch` `server.js` in the base of `/starter`.

It's important to remember, we're doing this because we're building a 
front end application. If we were making a full stack website, we'd be
serving this site from our backend, and wouldn't need to include this 
step.

Let's go ahead and `require` webpack, the config file, and the dev 
server.

```js
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
```
Now we have access to the necessary modules.

`WebpackDevServer` acts as a constructor, so we can build a `new` dev 
server and fill it in with our necessary fields.

```js
new WebpackDevServer(webpack(config), { // bundle the js
  publicPath: config.output.publicPath, // set in the config file
  hot: true,                            // Now no need to refresh after file changes
  historyApiFallback: true              // Instead of serving 404 errors, we'll get our index.html
}).listen(8080, 'localhost', function (err, result) { // Listen and set port! Make sure it agrees with the entry!
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8080/');
});
```

This is the server build we'll be using for the course, but feel free to
look up more customizations!

##### __`output`__

Here's where we specify the location to find bundled code.

```js
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
```

We're specifying a new folder, `/dist` (the default name for distributed
code) to place the code - this will be used for production. Then naming 
the newly bundled file, `bundle.js`.

And finally, publicPath is the relative path to find bundled js in the 
browser (served from memory).

This means we'll need to hook up our bundled JS in the index.html.

```html
<!-- index.html -->

<script src="/static/bundle.js"></script>
```

##### `plugins`

Use plugins to add functionality typically related to bundles in 
webpack. For our basic build, we'll be using two built-in plugins.

```js
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
```

These are two plugins you'll find in most webpack config files for React
projects. The first is needed to make the hot reload work. The second is
to remove failing assets from the bundle. Here's a bit more from 
webpack's list of plugins on github:

> "When there are errors while compiling this plugin skips the emitting 
> phase (and recording phase), so there are no assets emitted that 
> include errors. The emitted flag in the stats is false for all assets. 
> If you are using the CLI, the webpack process will not exit with an 
> error code by enabling this plugin. If you want webpack to "fail" when 
> using the CLI, please check out the bail option."
>
> -- [Webpack Plugin Docs](https://github.com/webpack/docs/wiki/list-of-plugins)

##### `modules`

Here's the real quinoa and potatoes of Webpack - this is where we 
specify what we want changed!

For the most part, you'll be adding different "loaders" to your module 
to change certain filetypes. For instance, let's start with our babel 
loader:

```js
  module: {
    loaders: [
      {
        test: /\.js$/, // use a regex to specify filetype
        loaders: ['babel'], // specify the loaders to use
        include: path.join(__dirname, 'src') // tell it where to find said files
      }
    ]
  }
```

Each loader has the same fields, and you can add multiple loaders within 
the array.

We'll show that with our css and scss loader:

```js
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap', // these are ! delimited
        include: path.join(__dirname, 'src/scss')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap', // these are ! delimited
        include: path.join(__dirname, 'src/scss')
      }
    ]
  }
```

You can also put multiple loaders on each fietype by sending an array 
(like the `babel` loader for `.js` files), but be certain to read the 
docs on each loader, to find any special behaviors…

##### `.babelrc`

For instance, the `babel` loader needs a `.babelrc` file in order to 
specify what to load.

Lets `touch` a `.babelrc` in the base of our project to specify which
babel dependencies to use.

```JSON
<!-- .babelrc -->
{
  "presets": ["es2015"]
}
```

Eventually, we'll throw in a couple more loaders into `.babelrc`, but 
this is enough for us to start with.

#### Run this Puppy!

We're finally ready to run our webpack. Go ahead and type into terminal,
`node server.js`.

You should see the file go up and running.

However, let's make a friendlier set up. Go into `package.json` and find
`"scripts"`. We're going to make a custom command:

```JSON
  "scripts": {
    "start": "node server.js"
  },
```

Now we can just write `npm run start` and build our webpack. Here are 
some other important commands you may need for other projects:

`webpack -w`: In the case that you don't want to use webpack with a 
server, you can always use this command to watch your files and 
re-execute webpack whenever any of the files change.

`webpack -p`: Build for production.

## Outro

We now have a basic webpack build that we (hopefully) understand!

You can add and remove things as you get more comfortable, but we'll 
supply you with a webpack build for React projects so you won't need to 
recreate the wheel each time.

##### Questions

1. Where in `webpack.config.js` do we specify which files to alter?
2. Is order important for the `entry` points array?
3. What does a "hot reloader" do?

References

[Pentacode Webpack Video](https://www.youtube.com/watch?v=gZ_lpcxo03k)
[Webpack docs](http://webpack.github.io/docs/)
