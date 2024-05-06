const {
    Grammar: NearleyGrammar,
    Parser: NearleyParser
} = require('nearley');


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

        return parser.results[0];
    }
}


module.exports = FunctionParser;
