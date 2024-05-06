// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "Function$string$1", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Function$ebnf$1", "symbols": ["FunctionArguments"], "postprocess": id},
    {"name": "Function$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Function", "symbols": ["Function$string$1", "_", {"literal":"("}, "_", "Function$ebnf$1", "_", {"literal":")"}, "_", {"literal":"{"}, "FunctionBody", {"literal":"}"}], "postprocess": 
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
        },
    {"name": "Function$string$2", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Function$ebnf$2", "symbols": ["FunctionArguments"], "postprocess": id},
    {"name": "Function$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Function", "symbols": ["Function$string$2", "_", "Identifier", "_", {"literal":"("}, "_", "Function$ebnf$2", "_", {"literal":")"}, "_", {"literal":"{"}, "FunctionBody", {"literal":"}"}], "postprocess": 
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
        },
    {"name": "Function$ebnf$3", "symbols": ["FunctionArguments"], "postprocess": id},
    {"name": "Function$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Function$string$3", "symbols": [{"literal":"="}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Function", "symbols": [{"literal":"("}, "_", "Function$ebnf$3", "_", {"literal":")"}, "_", "Function$string$3", "_", {"literal":"{"}, "FunctionBody", {"literal":"}"}], "postprocess": 
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
        },
    {"name": "FunctionArguments$ebnf$1$subexpression$1", "symbols": ["Identifier", "_", {"literal":","}, "_"]},
    {"name": "FunctionArguments$ebnf$1", "symbols": ["FunctionArguments$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "FunctionArguments$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "FunctionArguments", "symbols": ["FunctionArguments$ebnf$1", "Identifier"], "postprocess": 
        (tokens) => tokens
            .flat(Infinity)
            .map(
                value => typeof value === 'string' ? value : ''
            )
            .join('')
            .split(',')
        },
    {"name": "FunctionBody$ebnf$1", "symbols": []},
    {"name": "FunctionBody$ebnf$1$subexpression$1", "symbols": [/./]},
    {"name": "FunctionBody$ebnf$1$subexpression$1", "symbols": [{"literal":"\n"}]},
    {"name": "FunctionBody$ebnf$1", "symbols": ["FunctionBody$ebnf$1", "FunctionBody$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "FunctionBody", "symbols": ["FunctionBody$ebnf$1"], "postprocess": 
        (tokens) => tokens.flat(Infinity).join('').trim()
        },
    {"name": "Identifier$ebnf$1", "symbols": [/[A-Za-z_1-9]/]},
    {"name": "Identifier$ebnf$1", "symbols": ["Identifier$ebnf$1", /[A-Za-z_1-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "Identifier", "symbols": ["Identifier$ebnf$1"], "postprocess": 
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
        }
]
  , ParserStart: "Function"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
