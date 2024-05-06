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
    {"name": "Function", "symbols": ["Function$string$1", "_", {"literal":"("}, "_", {"literal":")"}, "_", {"literal":"{"}, "FunctionBody", {"literal":"}"}], "postprocess": 
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
        },
    {"name": "Function$string$2", "symbols": [{"literal":"f"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Function", "symbols": ["Function$string$2", "_", "Identifier", "_", {"literal":"("}, "_", {"literal":")"}, "_", {"literal":"{"}, "FunctionBody", {"literal":"}"}], "postprocess": 
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
        },
    {"name": "Function$string$3", "symbols": [{"literal":"="}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "Function", "symbols": [{"literal":"("}, "_", {"literal":")"}, "_", "Function$string$3", "_", {"literal":"{"}, "FunctionBody", {"literal":"}"}], "postprocess": 
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
