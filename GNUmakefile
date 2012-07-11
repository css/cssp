.PHONY: test

build: src/parser.ometajs src/transformer.ometajs src/translator.ometajs src/cssptt.pre.js
	@cp src/cssptt.pre.js src/cssptt.js
	@node_modules/.bin/ometajs2js -b -i src/parser.ometajs >> src/cssptt.js
	@node_modules/.bin/ometajs2js -b -i src/transformer.ometajs >> src/cssptt.js
	@node_modules/.bin/ometajs2js -b -i src/translator.ometajs >> src/cssptt.js

test:
	@node --stack-trace-limit=1024 test/test.js
