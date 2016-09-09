# Onetap
An clone of the [One Tap Quest](http://shimage.net/one-tap-quest/) in HTML5,
created for the Fall 2016 class of CIS 580 at Kansas State University.

## Compiling
The source code in the src directory is transpiled from ES6 to ES3 using Browserify and Babel.  These must first be installed on your system:

```$ npm install -g browserify```

```$ npm install babelify babel-preset-es2015```

Once installed, you can transpile the current source with the command:

```$ browserify src/onetap.js -o onetap.js -t [ babelify --presets [ es2015 ] ]```

Remember, the browser must be refreshed to receive the changed javascript file.

## Credits
The incredible art was provided by [Interdimensional_](http://opengameart.org/users/interdimensional) of [Open Game Art](http://opengameart.org) under a [Creative Commons Attribution Share-alike license](https://creativecommons.org/licenses/by-sa/3.0/)

Game framework HTML5/CSS3/Javascirpt code was written by course instructor Nathan Bean, and also released under the [CC-A-SA 3.0 License](https://creativecommons.org/licenses/by-sa/3.0/)
