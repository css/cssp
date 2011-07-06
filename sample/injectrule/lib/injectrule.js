var fs = require('fs'),
    print = require('sys').print,
    cssp = require('../../../lib/csspapi.js'),
    ir = require('../src/injectrule.js'),
    src = process.argv[2] ? fs.readFileSync(process.argv[2]).toString() : null;

if (src !== null) {
    print(cssp.translate(cssp.transform(cssp.parse(src), ir.IRTransformer), ir.IRTranslator));
} else {
    console.log('USAGE: injectrule filename');
}
