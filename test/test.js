var fs = require('fs'),
    cssp = require('./../lib/csspapi.js'),
    array2string = cssp.array2string,
    _parse = cssp.parse,
    _transform = cssp.transform,
    _translate = cssp.translate,
    d_dir = __dirname + '/data',
    d_list = fs.readdirSync(d_dir),
    okn = 0, total = 0;

var funcs = {
    'p': function parse(src, match) {
            return array2string(_parse(src, match), 0);
         },
    'f': function transform(src, match) {
            return array2string(_transform(_parse(src, match), match), 0);
         },
    'l': function translate(src, match) {
            return _translate(_transform(_parse(src, match), match), match);
         }
};

d_list.forEach(function(rule_dir) {
    var rule = rule_dir.substring(5),
        path = d_dir + '/' + rule_dir + '/',
        list = fs.readdirSync(path),
        ext,
        files = {},
        k, a, b, c, src, t, r;

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
            src = readFile(path + k + '.css').trim();
            t = '\'' + rule + '\' / \'' + k + '.';
            for (a in funcs) {
                if (a in files[k]) {
                    total++;
                    r = (((b = funcs[a](src, rule)) == (c = readFile(path + k + '.' + a).trim())));
                    r && okn++;
                    if (!r) {
                        console.log('FAIL: ' + t + a);
                        console.log('IN:\n' + c + '\nOUT:\n' + b);
                    }
                }
            }
        }
    }
});

console.log('Total: ' + total + '. Ok: ' + okn + '. Fail: ' + (total - okn));

function readFile(path) {
    return fs.readFileSync(path).toString();
}
