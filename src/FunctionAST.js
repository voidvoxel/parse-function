class FunctionAST {
    /**
     * @type {string[]}
     */
    #arguments

    /**
     * @type {string}
     */
    #body

    /**
     * @type {string}
     */
    #name


    constructor (
        name,
        body,
        ...args
    ) {
        this.#name = name;
        this.#body = body;
        this.#arguments = args;
    }


    getArguments () {
        return structuredClone(this.#arguments);
    }


    getBody () {
        return this.#body;
    }


    getName () {
        return this.#name;
    }
}


module.exports = FunctionAST;
