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


    addArgument (...args) {
        for (let arg of args) {
            if (typeof arg !== 'string') {
                throw new TypeError(
                    `Expected \`args\` to contain values of type 'string' `
                        + `but instead received value of type '${typeof arg}'.`
                    );
            }

            this.#arguments.push(arg);
        }
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


    removeAllArguments () {
        this.#arguments = [];
    }


    setBody (body) {
        if (typeof body !== 'string') {
            throw new TypeError(
                `Expected \`body\` to be of type 'string' `
                    + `but instead received value of type '${typeof body}'.`
                );
        }

        this.#body = body;
    }


    setName (name) {
        if (typeof name !== 'string') {
            throw new TypeError(
                `Expected \`name\` to be of type 'string' `
                    + `but instead received value of type '${typeof name}'.`
                );
        }

        this.#name = name;
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
