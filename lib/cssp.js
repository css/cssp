var fs = require('fs'),
    cssptt = require('./../src/cssptt.js'),
    parser = cssptt.CSSParser,
    transformer = cssptt.CSSTransformer,
    translator = cssptt.CSSTranslator,
    tree, trans;

var args = process.argv.slice(2),
    opts = args.length ? getOpts(args, [
        '-v', '--version',
        '-h', '--help',
        '-d', '--dump'
    ]) : null,
    single = opts && opts.single,
    pairs = opts && opts.pairs,
    other = opts && opts.other,
    fileName = other && other[0];

var src = fs.readFileSync(fileName).toString().trim();

tree = parser.matchAll(src, 'stylesheet');
trans = transformer.matchAll(tree, 'stylesheet');

if (!opts || single.contains(['-h', '--help']) || other.length > 1) {
    printFile('USAGE');
} else if (single.contains(['-v', '--version'])) {
    printFile('VERSION');
} else {
    if (single.contains(['-d', '--dump'])) {
        console.log(array2string(trans, 0));
    } else {
        console.log(translator.matchAll(trans, 'stylesheet'));
    }
}

// Utils

function array2string(a, level) {
    var spaces = dummySpaces(level),
        s = (level ? '\n' + spaces : '') + '[', t;

    a.forEach(function(e) {
        s += (Array.isArray(e) ? array2string(e, level + 1) : e.toString()) + ', ';
    });

    return s.substr(0, s.length - 2) + ']';
}

function dummySpaces(num) {
    return '                                        '.substr(0, num * 2);
}

function getOpts(argv, o_single, o_pairs) {
    var opts = { single : [], pairs : {}, other : [] },
        arg,
        i = 0;

    for (; i < argv.length;) {
        arg = argv[i];
        if (o_single && o_single.indexOf(arg) !== -1 && (!o_pairs || o_pairs.indexOf(arg) === -1)) {
            opts.single.push(arg);
        } else if (o_pairs && o_pairs.indexOf(arg) !== -1 && (!o_single || o_single.indexOf(arg) === -1)) {
            opts.pairs[arg] = argv[++i];
        } else opts.other.push(arg);
        i++;
    }

    opts.single.contains = function(value) {
        if (typeof value === 'string') {
            return this.indexOf(value) !== -1;
        } else {
            for (var i = 0; i < value.length; i++) if (this.indexOf(value[i]) !== -1) return true;
        }
        return false;
    };

    return opts;
}

function printFile(filename) {
    console.log(fs.readFileSync(__dirname.slice(0, __dirname.lastIndexOf('/')) + '/' + filename).toString());
}
