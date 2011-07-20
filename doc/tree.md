# Справочник элементов дерева

## Обозначения

### SC

(s | comment)*

## CSS stylesheet

### stylesheet

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

## CSS ruleset

### ruleset

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

## CSS selector

### selector

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### simpleselector

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### nthselector

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### attrib

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### pseudoe

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### pseudoc

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### class

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### combinator

Комбинатор: `+`, `>`, `~`.

* Ometa/JS: `['combinator' :x]`
* JS: `['combinator', x]`
* out: `x`

Примеры:

* `<ident>``+``<class>` -> `[.. ident.. ]``['combinator', '+']``[.. class ..]`

### namespace

* Ometa/JS: `['namespace']`
* JS: `['namespace']`
* out: `|`

Примеры:

* `<ident>``|``<ident>` -> `[.. ident ..]``['namespace']``[.. ident ..]`

### delim

Разделитель простых селекторов (см. simpleselector).

* Ometa/JS: `['delim']`
* JS: `['delim']`
* out: `,`

Примеры:

* `<simpleselector>``,``<simpleselector>` -> `[.. simpleselector ..]``['delim']``[.. simpleselector ..]`

## CSS block

### block

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### decldelim

Разделитель свойств (см. declaration) и фильтров (см. filter).

* Ometa/JS: `['decldelim']`
* JS: `['decldelim']`
* out: `;`

Примеры:

* `<declaration>``;``<filter>` -> `[.. declaration ..]``['decldelim']``[.. filter ..]`

## CSS declaration

### declaration

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### property

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### value

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### functionExpression

* Ometa/JS: `['functionExpression' :x]`
* JS: `['functionExpression', x]`
* out: `'expression(' + x + ')'`

Примеры:

* `expression(var x = 1)` -> `['value', ['functionExpression', 'var x = 1']]`

### important

* Ometa/JS: `['important' SC:x]`
* JS: `['important', SC:x]`
* out: `'!' + x + 'important'`

Примеры:

* `!important` -> `['important']`
* `!  /*test*/important` -> `['important', ['s', '  '], ['comment', 'test']]`

## CSS filter

### filter

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### filterp

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### filterv

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### progid

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

## CSS at-rule

### atrules

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### atruleb

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### atruler

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### atrulerq

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### atrulers

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### atkeyword

Имя at-rule.

* Ometa/JS: `['atkeyword' ident:x]`
* JS: `['atkeyword', x]`
* out: `'@' + x`

Примеры:

* `@charset` -> `['atkeyword', ['ident', 'charset']]`

## Остальное общее

### unary

Унарный оператор: `+`, `-`.

* Ometa/JS: `['unary' :x]`
* JS: `['unary', x]`
* out: `x`

Примеры:

* `+``100` -> `['unary', '+']``['number', '100']`

### operator

Оператор: `/`, `,`, `:`.

* Ometa/JS: `['operator' :x]`
* JS: `['operator', x]`
* out: `x`

Примеры:

* `<ident>``/``<ident>` -> `[.. ident ..]``['operator', '/']``[.. ident ..]`

### uri

* Ometa/JS: `['uri' SC:x (raw | string):y SC:z]`
* JS: `['uri', SC:x, (raw | string):y, SC:z]`
* out: `'url(' + x + y + z + ')'`

Примеры:

* `url(http://foo.com/bar.css)` -> `['uri', ['raw', 'http://foo.com/bar.css']]`
* `url("http://foo.com/bar.css")` -> `['uri', ['string', '"http://foo.com/bar.css"']]`
* `url(  http://foo.com/bar.css/*test*/)` -> `['uri', ['s', '  '], ['raw', 'http://foo.com/bar.css/*test*/']]`
* `url(http://foo.com/bar.css /*test*/)` -> `['uri', ['s', '  '], ['raw', 'http://foo.com/bar.css'], ['s', ' '], ['comment', 'test']]`
* `url("http://foo.com/bar.css"/*test*/)` -> `['uri', ['string', '"http://foo.com/bar.css"'], ['comment', 'test']]`

### function

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

### braces

* Ometa/JS: `['']`
* JS: `['']`
* out: ``

Примеры:

*

## Общие примитивы

### ident

Идентификатор: имена элементов, классов, функций и т.д.

* Ometa/JS: `['ident' :x]`
* JS: `['ident', x]`
* out: `x`

Примеры:

* `rgb` -> `['ident', 'rgb']`

### string

* Ometa/JS: `['string' :x]`
* JS: `['string', x]`
* out: `x`

Примеры:

* `"multi \n line"` -> `['string', '"multi \n line"']`

### hash

* Ometa/JS: `['hash' :x]`
* JS: `['hash', x]`
* out: `'#' + x`

Примеры:

* `#FFF` -> `['hash', 'FFF']`

### number

Число.

* Ometa/JS: `['number' :x]`
* JS: `['number', x]`
* out: `x`

Примеры:

* `10` -> `['number', '10']`

### s

whitespace: ` `, `\t`, `\r`, `\n`, `\f`.

* Ometa/JS: `['s' :x]`
* JS: `['s', x]`
* out: `x`

Примеры:

* `    ` -> `['s', '    ']`

### comment

Комментарий.

* Ometa/JS: `['comment' :x]`
* JS: `['comment', x]`
* out: `'/*' + x + '*/'`

Примеры:

* `/*test*/` -> `['comment', 'test']`

### percentage

* Ometa/JS: `['percentage' number:x]`
* JS: `['percentage', x]`
* out: `x + '%'`

Примеры:

* `100%` -> `['percentage', ['number', '100']]`

### dimension

* Ometa/JS: `['dimension' number:x ident:y]`
* JS: `['dimension', x, y]`
* out: `x + y`

Примеры:

* `100px` -> `['dimension', ['number', '100'], ['ident', 'px']]`

### raw

Служебный токен для случаев, в которых требуется лишь контейнер для значения.

* Ometa/JS: `['raw' :x]`
* JS: `['raw', x]`
* out: `x`

Пример: см. uri.
