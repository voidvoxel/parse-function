const {
    Grammar: NearleyGrammar,
    Parser: NearleyParser
} = require('nearley');


const FunctionAST = require("./FunctionAST");
const grammar = require("./grammar");


class FunctionParser {
    #grammar


    constructor () {
        this.#grammar = NearleyGrammar.fromCompiled(grammar);
    }


    parse (f) {
        const sourceCode = f.toString();

        const parser = new NearleyParser(this.#grammar);

        parser.feed(sourceCode);

        let {
            name,
            args,
            body
        } = parser.results[0];

        name ??= 'anonymous';
        args ??= [];
        body ??= '';

        return new FunctionAST(
            name,
            body,
            ...args
        );
    }
}


module.exports = FunctionParser;
