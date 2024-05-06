const parseFunction = require("..");


function helloWorld () {
    console.log("Hello, world!");
}

const ast = parseFunction(helloWorld);

console.log(`Evaluating the body of function \`${ast.name}\`...`);

eval(ast.body);
