var fs = require('fs'),
    print = require('sys').print,
    cssp = require('./csspapi.js'),
    printTree = cssp.printTree,
    src, tree, trans,
    cmpCfg = {};

var args = process.argv.slice(2),
    opts = args.length ? getOpts(args, [
        '-v', '--version',
        '-h', '--help',
        '-dp', '--parser',
        '-df', '--transformer',
        '-dl', '--translator',
        '-dc', '--compressor',
        '-c', '--compress',
        '-cn', '--compress-needless',
        '-t', '--trim',
    ], ['-r', '--rule']) : null,
    single = opts && opts.single,
    pairs = opts && opts.pairs,
    other = opts && opts.other,
    fileName = other && other[0],
    rule = pairs && (pairs['-r'] || pairs['--rule'] || 'stylesheet');

if (!opts || single.contains(['-h', '--help']) || other.length > 1) {
    printFile('USAGE');
} else if (single.contains(['-v', '--version'])) {
    printFile('VERSION');
} else {
    src = fs.readFileSync(fileName).toString();
    if (single.contains(['-t', '--trim'])) src = src.trim();

    tree = cssp.parse(src, rule);
    if (single.contains(['-dp', '--parser'])) {
        printTree(tree);
    }

    if (single.contains(['-df', '--transformer'])) {
        trans = cssp.transform(tree, rule);
        printTree(trans);
    } else trans = tree;

    cmpCfg.cn = single.contains(['-c', '--compress']) || single.contains(['-cn', '--compress-needless']);
    cmpCfg.cv = single.contains(['-c', '--compress']) || !cmpCfg.cn;

    if (single.contains(['-dc', '--compressor'])) {
        trans = cssp.compress(trans, rule);
        printTree(trans);
    } else if (cmpCfg.cn) {
        trans = cssp.compress(trans, rule, cmpCfg);
    }

   if (single.contains(['-dl', '--translator']) ||
            (!single.contains(['-dp', '--parser']) &&
             !single.contains(['-df', '--transformer']) &&
             !single.contains(['-dc', '--compressor']))) {
        print(cssp.translate(trans, rule));
    }
}

// Utils

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
    print(fs.readFileSync(__dirname.slice(0, __dirname.lastIndexOf('/')) + '/' + filename).toString());
}
