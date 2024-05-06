const parseFunction = require("..");


function exp (x) {
    return Math.exp(x);
}


function add (x, y) {
    return x + y;
}


function helloWorld () {
    console.log("Hello, world!");
}


test(
    "parse a function without arguments",
    () => {
        const ast = parseFunction.ast(helloWorld);

        expect(ast.getName()).toBe('helloWorld');
        expect(ast.getArguments().length).toBe(0);
        expect(ast.getBody()).toBe(`console.log("Hello, world!");`);
    }
);


test(
    "parse a function with one argument",
    () => {
        const ast = parseFunction.ast(exp);

        const expectedArgs = [ 'x' ];

        expect(ast.getName()).toBe('exp');

        expect(
            JSON.stringify(
                ast.getArguments()
            )
        ).toBe(
            JSON.stringify(
                expectedArgs
            )
        );

        expect(ast.getBody()).toBe(`return Math.exp(x);`);

        expect(ast.toFunction()(420)).toBe(Math.exp(420));
    }
);


test(
    "parse a function with multiple arguments",
    () => {
        const ast = parseFunction.ast(add);

        const expectedArgs = [ 'x', 'y' ];

        expect(ast.getName()).toBe('add');

        expect(
            JSON.stringify(
                ast.getArguments()
            )
        ).toBe(
            JSON.stringify(
                expectedArgs
            )
        );

        expect(ast.getBody()).toBe(`return x + y;`);

        expect(ast.toFunction()(400, 20)).toBe(420);
    }
);
