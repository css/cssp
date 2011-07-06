var cssptt = require('../src/cssptt.js'),
    csstl = exports.CSSTranslator = cssptt.CSSTranslator;

var parse = exports.parse = function(src /*, rule, parser*/) {
    return getGrammar(arguments, cssptt.CSSParser).matchAll(src, getRule(arguments));
};

var transform = exports.transform = function(tree /*, rule, parser*/) {
    return getGrammar(arguments, cssptt.CSSTransformer).match(tree, getRule(arguments));
};

var translate = exports.translate = function(tree /*, rule, translator*/) {
    return getGrammar(arguments, cssptt.CSSTranslator).match(tree, getRule(arguments));
};

function getGrammar(args, def) {
    if (args[1] && typeof args[1] !== 'string') return merge(def, args[1]);
    if (args[2] && typeof args[2] !== 'string') return merge(def, args[2]);
    return def;
}

function getRule(args) {
    if (args[1] && typeof args[1] === 'string') return args[1];
    if (args[2] && typeof args[2] === 'string') return args[2];
    return 'stylesheet';
}

function merge(original, custom) {
    var r = {}, k;

    for (k in original) r[k] = original[k];
    for (k in custom) if (custom.hasOwnProperty(k)) r[k] = custom[k];

    return r;
}
