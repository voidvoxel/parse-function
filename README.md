# `@voidvoxel/parse-function`

[![Known Vulnerabilities](https://snyk.io/test/github/voidvoxel/parse-function/badge.svg)](https://snyk.io/test/github/voidvoxel/parse-function)

Get the body of a JavaScript function's source code as a string.

## Installation

```sh
npm i @voidvoxel/parse-function
```

### Usage

```js
// Import `@voidvoxel/parse-function`.
import parseFunction from "@voidvoxel/parse-function";
/* OR */
const parseFunction = require("@voidvoxel/parse-function");


// Parse a function from a string.
const add = parseFunction(`function add (x, y) { return x + y; }`);

// Call the parsed function.
console.log(add(400, 20));


// Create a function to parse.
function helloWorld () {
    console.log("Hello, world!");
}


// Run the function to see what it normally does.
helloWorld();

// Parse the function.
const ast = parseFunction.ast(helloWorld);

// Evaluate the body of the function to run the code directly.
// Normally, `eval` is a security risk, but it's okay to use for testing
// purposes so long as it's not within a production environment.
eval(ast.body);
```
