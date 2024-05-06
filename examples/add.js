const parseFunction = require("../src");


function add (x, y) {
    return x + y;
}

const ast = parseFunction(add);

console.log(ast.getName());
console.log(ast.getArguments());

console.log();

console.log(`${ast}`);

const f = ast.toFunction();

console.log();

console.log(f(400, 20));

console.log();

console.log(`${f}`);
