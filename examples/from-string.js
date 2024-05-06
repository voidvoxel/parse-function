const parseFunction = require("../src");


const ast = parseFunction.ast(`function add (x, y) { return x + y; }`);

const add = ast.toFunction();

console.log(`${ast}`);

console.log(add(400, 20));
