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
3. Setting Up Webpack
4. Custom Loaders
5. Blah Blah Babel
6. Package Bundlers vs. Task Runners
7. Outro

## Morph My Code

![Aximili-Esgarrouth-Isthill](http://img06.deviantart.net/289d/i/2012/136/e/e/aximili_esgarrouth_isthill_by_alex_gone_loco-d501r9g.png)

Aximili-Esgarrouth-Isthill, aka Ax, happened to be one of my previous 
students. He took to code very similarly to animals - he could morph
any code he touched!

He decided to let the world in on his technique, and authored webpack 
under the psuedonym Tobias Koppers :wink:

## What is Webpack?

Webpack is a code bundler. It is designed to run through all of a 
package's dependencies and concatenate their source into one file that 
(ideally) can be used in a browser.

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

## Setting Up Webpack








