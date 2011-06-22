var cssptt = require('../src/cssptt.js'),
    cssp = exports.CSSParser = cssptt.CSSParser,
    csstf = exports.CSSTransformer = cssptt.CSSTransformer,
    csstl = exports.CSSTranslator = cssptt.CSSTranslator;

var parse = exports.parse = function(src, rule, parser) {
    var _parser = parser ? merge(cssp, parser) : cssp;

    return _parser.matchAll(src, rule ? rule : 'stylesheet');
};

var transform = exports.transform = function(tree, rule, transformer) {
    var _transformer = transformer ? merge(csstf, transformer) : csstf;

    return _transformer.match(tree, rule ? rule : 'stylesheet');
};
/*
var translate = exports.translate = function(rule, translator) {
    var _parser = parser ? merge(cssp, parser) : cssp;

    return _parser.matchAll(src, rule ? rule : 'stylesheet');
};
*/
function merge(original, custom) {
    var r = {}, k;

    for (k in original) r[k] = original[k];
    for (k in custom) r[k] = custom[k];

    return r;
}
