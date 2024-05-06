@builtin "whitespace.ne"


Function ->
    "function" _ "(" _ FunctionArguments:? _ ")" _ "{" FunctionBody "}"
{%
    (
        tokens,
        location,
        reject
    ) => {
        const name = null;
        const args = tokens[4];
        const body = tokens[9];

        if (body.startsWith(' ') || body.endsWith(' ')) {
            return reject;
        }

        return {
            name,
            args,
            body
        };
    }
%} |
    "function" _ Identifier _ "(" _ FunctionArguments:? _ ")" _ "{" FunctionBody "}"
{%
    (
        tokens,
        location,
        reject
    ) => {
        const name = tokens[2];
        const args = tokens[6];
        const body = tokens[11];

        if (body.startsWith(' ') || body.endsWith(' ')) {
            return reject;
        }

        return {
            name,
            args,
            body
        };
    }
%} |
    "(" _ FunctionArguments:? _ ")" _ "=>" _ "{" FunctionBody "}"
{%
    (
        tokens,
        location,
        reject
    ) => {
        const name = null;
        const args = tokens[2];
        const body = tokens[9];

        if (body.startsWith(' ') || body.endsWith(' ')) {
            return reject;
        }

        return {
            name,
            args,
            body,
        };
    }
%}


FunctionArguments ->
    (Identifier _ "," _):+ Identifier
{%
    (tokens) => tokens
        .flat(Infinity)
        .map(
            value => typeof value === 'string' ? value : ''
        )
        .join('')
        .split(',')
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
