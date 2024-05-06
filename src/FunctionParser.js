const {
    Grammar: NearleyGrammar,
    Parser: NearleyParser
} = require('nearley');


const FunctionAST = require("./FunctionAST");
const grammar = require("../dist/grammar");


class FunctionParser {
    #grammar


    constructor () {
        this.#grammar = NearleyGrammar.fromCompiled(grammar);
    }


    parse (f) {
        const sourceCode = f.toString();

        const parser = new NearleyParser(this.#grammar);

        parser.feed(sourceCode);

        const {
            name,
            args,
            body
        } = parser.results[0];

        return new FunctionAST(
            name,
            body,
            ...args
        );
    }
}


module.exports = FunctionParser;
