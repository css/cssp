# Справочник элементов дерева

## Обозначения

### SC

(s | comment)*

## CSS stylesheet

### stylesheet

* token: `['stylesheet']`
* text: ``

Примеры:

*

## CSS ruleset

### ruleset

* token: `['ruleset']`
* text: ``

Примеры:

*

## CSS selector

### selector

* token: `['selector']`
* text: ``

Примеры:

*

### simpleselector

* token: `['simpleselector']`
* text: ``

Примеры:

*

### nthselector

* token: `['nthselector']`
* text: ``

Примеры:

*

### nth

* token: `['nth']`
* text: ``

Примеры:

*

### attrib

* token: `['attrib']`
* text: ``

Примеры:

*

### pseudoe

* token: `['pseudoe']`
* text: ``

Примеры:

*

### pseudoc

* token: `['pseudoc']`
* text: ``

Примеры:

*

### class

* token: `['class']`
* text: ``

Примеры:

*

### combinator

Комбинатор: `+`, `>`, `~`.

* token: `['combinator', x]`
* text: `x`

Примеры:

* `<ident>``+``<class>` -> `[.. ident.. ]``['combinator', '+']``[.. class ..]`

### namespace

* token: `['namespace']`
* text: `|`

Примеры:

* `<ident>``|``<ident>` -> `[.. ident ..]``['namespace']``[.. ident ..]`

### delim

Разделитель простых селекторов (см. **simpleselector**).

* token: `['delim']`
* text: `,`

Примеры:

* `<simpleselector>``,``<simpleselector>` -> `[.. simpleselector ..]``['delim']``[.. simpleselector ..]`

## CSS block

### block

* token: `['block']`
* text: ``

Примеры:

*

### decldelim

Разделитель свойств (см. **declaration**) и фильтров (см. **filter**).

* token: `['decldelim']`
* text: `;`

Примеры:

* `<declaration>``;``<filter>` -> `[.. declaration ..]``['decldelim']``[.. filter ..]`

## CSS declaration

### declaration

* token: `['declaration']`
* text: ``

Примеры:

*

### property

* token: `['property']`
* text: ``

Примеры:

*

### value

* token: `['value']`
* text: ``

Примеры:

*

### functionExpression

* token: `['functionExpression', x]`
* text: `'expression(' + x + ')'`

Примеры:

* `expression(var x = 1)` -> `['value', ['functionExpression', 'var x = 1']]`

### important

* token: `['important', SC:x]`
* text: `'!' + x + 'important'`

Примеры:

* `!important` -> `['important']`
* `!  /*test*/important` -> `['important', ['s', '  '], ['comment', 'test']]`

## CSS filter

### filter

* token: `['filter', filterp:x, filterv:y]`
* text: `x + ':' + y`

Примеры:

*

### filterp

Имя свойства: `filter`, `-filter`, `_filter`, `*filter`, `-ms-filter`.

* token: `['filterp', x, SC:y]`
* text: `x + y`

Примеры: см. **filter**.

### filterv

* token: `['filterv']`
* text: ``

Примеры: см. **filter**.

### progid

* token: `['progid', SC:x, raw:y, SC:z]`
* text: `x + y + z`

Примеры: см. **filter**.

## CSS at-rule

### atrules

* token: `['atrules']`
* text: ``

Примеры:

*

### atruleb

* token: `['atruleb']`
* text: ``

Примеры:

*

### atruler

* token: `['atruler']`
* text: ``

Примеры:

*

### atrulerq

* token: `['atrulerq']`
* text: ``

Примеры:

*

### atrulers

* token: `['atrulers']`
* text: ``

Примеры:

*

### atkeyword

Имя at-rule.

* token: `['atkeyword', x]`
* text: `'@' + x`

Примеры:

* `@charset` -> `['atkeyword', ['ident', 'charset']]`

## Остальное общее

### unary

Унарный оператор: `+`, `-`.

* token: `['unary', x]`
* text: `x`

Примеры:

* `+``100` -> `['unary', '+']``['number', '100']`

### operator

Оператор: `/`, `,`, `:`.

* token: `['operator', x]`
* text: `x`

Примеры:

* `<ident>``/``<ident>` -> `[.. ident ..]``['operator', '/']``[.. ident ..]`

### uri

* token: `['uri', SC:x, (raw | string):y, SC:z]`
* text: `'url(' + x + y + z + ')'`

Примеры:

* `url(foo.com/bar.css)` -> `['uri', ['raw', 'foo.com/bar.css']]`
* `url("foo.com/bar.css")` -> `['uri', ['string', '"foo.com/bar.css"']]`
* `url( foo.com/bar.css/*t*/)` -> `['uri', ['s', ' '], ['raw', 'foo.com/bar.css/*t*/']]`
* `url(foo.com/bar.css /*t*/)` -> `['uri', ['s', ' '], ['raw', 'foo.com/bar.css'], ['s', ' '], ['comment', 't']]`
* `url("foo.com/bar.css"/*t*/)` -> `['uri', ['string', '"foo.com/bar.css"'], ['comment', 't']]`

### function

* token: `['function']`
* text: ``

Примеры:

*

### braces

* token: `['braces']`
* text: ``

Примеры:

*

## Общие примитивы

### ident

Идентификатор: имена элементов, классов, функций и т.д.

* token: `['ident', x]`
* text: `x`

Примеры:

* `rgb` -> `['ident', 'rgb']`

### string

* token: `['string', x]`
* text: `x`

Примеры:

* `"multi \n line"` -> `['string', '"multi \n line"']`

### hash

* token: `['hash', x]`
* text: `'#' + x`

Примеры:

* `#FFF` -> `['hash', 'FFF']`

### number

Число.

* token: `['number', x]`
* text: `x`

Примеры:

* `10` -> `['number', '10']`

### s

whitespace: ` `, `\t`, `\r`, `\n`, `\f`.

* token: `['s', x]`
* text: `x`

Примеры:

* `    ` -> `['s', '    ']`

### comment

Комментарий.

* token: `['comment', x]`
* text: `'/*' + x + '*/'`

Примеры:

* `/*test*/` -> `['comment', 'test']`

### percentage

* token: `['percentage', x]`
* text: `x + '%'`

Примеры:

* `100%` -> `['percentage', ['number', '100']]`

### dimension

* token: `['dimension', x, y]`
* text: `x + y`

Примеры:

* `100px` -> `['dimension', ['number', '100'], ['ident', 'px']]`

### raw

Служебный токен для случаев, в которых требуется лишь контейнер для значения.

* token: `['raw', x]`
* text: `x`

Примеры: см. **uri**.
