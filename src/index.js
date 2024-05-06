const FunctionParser = require("./FunctionParser");


function parseFunction (f) {
    return new FunctionParser().parse(f);
}


module.exports = parseFunction;
