.PHONY: test

build: src/parser.ometajs src/transformer.ometajs src/translator.ometajs src/cssptt.pre.js src/cssptt.post.js
	@cp src/cssptt.pre.js src/cssptt.js
	@ometajs2js -i src/parser.ometajs >> src/cssptt.js
	@ometajs2js -i src/transformer.ometajs >> src/cssptt.js
	@ometajs2js -i src/translator.ometajs >> src/cssptt.js
	@cat src/cssptt.post.js >> src/cssptt.js

test:
	@node test/test.js
