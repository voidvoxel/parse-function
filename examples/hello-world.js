const parseFunction = require("..");


function helloWorld () {
    console.log("Hello, world!");
    console.log("Hello, world!");
    console.log("Hello, world!");
}

const ast = parseFunction(helloWorld);

console.log(ast);
