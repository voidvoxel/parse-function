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
        this.#name = name.trim();
        this.#body = body.trim();

        this.#arguments = args.map(arg => arg.trim());
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


    toFunction () {
        const args = this.getArguments();

        if (args.length > 0) {
            return new Function(
                ...args,
                this.getBody()
            );
        } else {
            return new Function(
                this.getBody()
            );
        }
    }


    toString () {
        return `function ${this.getName()} `
            + `(${this.getArguments().join(',')}) `
            + `{ ${this.getBody()} }`;
    }
}


module.exports = FunctionAST;
