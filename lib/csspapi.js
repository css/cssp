var cssptt = require('../src/cssptt.js'),
    csstl = exports.CSSTranslator = cssptt.CSSTranslator;

exports.parse = function(src /*, rule, parser*/) {
    return getGrammar(arguments, cssptt.CSSParser).matchAll(src, getRule(arguments));
};

exports.transform = function(tree /*, rule, transformer*/) {
    return getGrammar(arguments, cssptt.CSSTransformer).match(tree, getRule(arguments));
};

exports.translate = function(tree /*, rule, translator*/) {
    return getGrammar(arguments, cssptt.CSSTranslator).match(tree, getRule(arguments));
};

exports.compress = function(tree /*, rule, config*/) {
    var cmp = cssptt.CSSCompressor,
        oldCfg = cmp.cfg,
        cfg = getConfig(arguments),
        r;

    cmp._cfg = cfg;
    r = cmp.match(tree, getRule(arguments));
    cmp._cfg = oldCfg;
    return r;
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

function getConfig(args) {
    if (args[1] && typeof args[1] !== 'string') return args[1];
    if (args[2] && typeof args[2] !== 'string') return args[2];
    return { cv: true };
}

function merge(original, custom) {
    var r = {}, k;

    for (k in original) r[k] = original[k];
    for (k in custom) if (custom.hasOwnProperty(k)) r[k] = custom[k];

    return r;
}

exports.printTree = function(tree) {
    require('sys').print(treeToString(tree));
};

var treeToString = exports.treeToString = function(tree, level) {
    var spaces = dummySpaces(level),
        level = level ? level : 0,
        s = (level ? '\n' + spaces : '') + '[', t;

    tree.forEach(function(e) {
        s += (Array.isArray(e) ? treeToString(e, level + 1) : '\'' + e.toString() + '\'') + ', ';
    });

    return s.substr(0, s.length - 2) + ']';
};

function dummySpaces(num) {
    return '                                                  '.substr(0, num * 2);
}
