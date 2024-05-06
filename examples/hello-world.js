const parseFunction = require("..");


function helloWorld () {
    console.log("Hello, world!");
}

const ast = parseFunction(helloWorld);

eval(ast.body);
