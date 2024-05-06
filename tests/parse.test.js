const parseFunction = require("..");


function add (x, y) {
    return x + y;
}


function helloWorld () {
    console.log("Hello, world!");
}


test(
    "parse a function without arguments",
    () => {
        const ast = parseFunction(helloWorld);

        expect(ast.getName()).toBe('helloWorld');
        expect(ast.getArguments().length).toBe(0);
        expect(ast.getBody()).toBe(`console.log("Hello, world!");`);
    }
);


test(
    "parse a function with arguments",
    () => {
        const ast = parseFunction(add);

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
