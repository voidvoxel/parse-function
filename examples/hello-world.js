const parseFunction = require("..");


function helloWorld () {
    console.log("Hello, world!");
}

const ast = parseFunction(helloWorld);

console.log(`Evaluating the body of function \`${ast.getName()}\`...`);

eval(ast.getBody());

console.log(`${ast}`);

const f = ast.toFunction();

f();

console.log(`${f}`);
