const FunctionParser = require("./FunctionParser");


function ast (f) {
    return new FunctionParser().parse(f);
}


function parseFunction (f) {
    return ast(f).toFunction();
}


parseFunction.ast = ast;


module.exports = parseFunction;
