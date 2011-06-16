var fs = require('fs'),
    cssptt = require('./../src/cssptt.js'),
    parser = cssptt.CSSParser,
    transformer = cssptt.CSSTransformer,
    translator = cssptt.CSSTranslator,
    d_dir = __dirname + '/data',
    d_list = fs.readdirSync(d_dir),
    fail = 0;

var funcs = {
    'p': function parse(src, match) {
            return array2string(parser.matchAll(src, match), 0);
         },
    'f': function transform(src, match) {
            return array2string(transformer.matchAll(parser.matchAll(src, match), match), 0);
         },
    'l': function translate(src, match) {
            return translator.matchAll(transformer.matchAll(parser.matchAll(src, match), match), match);
         }
};

d_list.forEach(function(rule_dir) {
    var rule = rule_dir.substring(5),
        path = d_dir + '/' + rule_dir + '/',
        list = fs.readdirSync(path),
        ext,
        files = {},
        k, a, b, c, src, t;

    list.forEach(function(f) {
        var i = f.lastIndexOf('.');

        if (i !== -1) {
            ext = f.substring(i + 1);
            k = f.substring(0, i);
            if (!(k in files)) files[k] = {};
            files[k][ext] = 1;
        }
    });

    for (k in files) {
        if (files[k].css) {
            src = readFile(path + k + '.css');
            t = '\'' + rule + '\' / \'' + k + '.';
            for (a in funcs) {
                if (a in files[k]) {
                    console.log('Test ' + t + a + ': ' + ((b = funcs[a](src, rule)) !== (c = readFile(path + k + '.' + a))));
                }
            }
        }
    }
});

// Utils

function array2string(a, level) {
    var spaces = dummySpaces(level),
        s = (level ? '\n' + spaces : '') + '[', t;

    a.forEach(function(e) {
        s += (Array.isArray(e) ? array2string(e, level + 1) : '\'' + e.toString() + '\'') + ', ';
    });

    return s.substr(0, s.length - 2) + ']';
}

function dummySpaces(num) {
    return '                                        '.substr(0, num * 2);
}

function readFile(path) {
    return fs.readFileSync(path).toString();
}
