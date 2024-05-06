@builtin "whitespace.ne"


Function ->
    "function" _ "(" _ ")" _ "{" FunctionBody "}"
{%
    (
        tokens,
        location,
        reject
    ) => {
        const name = null;
        const body = tokens[7];

        if (body.startsWith(' ') || body.endsWith(' ')) {
            return reject;
        }

        return {
            name,
            body
        };
    }
%} |
    "function" _ Identifier _ "(" _ ")" _ "{" FunctionBody "}"
{%
    (
        tokens,
        location,
        reject
    ) => {
        const name = tokens[2];
        const body = tokens[9];

        if (body.startsWith(' ') || body.endsWith(' ')) {
            return reject;
        }

        return {
            name,
            body
        };
    }
%} |
    "(" _ ")" _ "=>" _ "{" FunctionBody "}"
{%
    (
        tokens,
        location,
        reject
    ) => {
        const name = null;
        const body = tokens[7];

        if (body.startsWith(' ') || body.endsWith(' ')) {
            return reject;
        }

        return {
            name,
            body
        };
    }
%}


FunctionBody ->
    (. | "\n"):*
{%
    (tokens) => tokens.flat(Infinity).join('').trim()
%}


Identifier ->
    [A-Za-z_1-9]:+
{%
    (
        tokens,
        location,
        reject
    ) => {
        const identifier = tokens.flat(Infinity).join('');

        if (identifier[0] >= '0' && identifier[0] <= '9') {
            return reject;
        }

        return identifier;
    }
%}
