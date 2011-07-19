# Справочник элементов дерева

## Обозначения

### SC

(s | comment)*

## CSS stylesheet

### stylesheet

## CSS ruleset

### ruleset

## CSS selector

### selector

### simpleselector

### nthselector

### attrib

### pseudoe

### pseudoc

### class

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

### decldelim

Разделитель свойств (см. declaration) и фильтров (см. filter).

* Ometa/JS: `['decldelim']`
* JS: `['decldelim']`
* out: `;`

Примеры:

* `<declaration>``;``<filter>` -> `[.. declaration ..]``['decldelim']``[.. filter ..]`

## CSS declaration

### declaration

### property

### value

### functionExpression

### important

* Ometa/JS: `['important' SC:x]`
* JS: `['important', SC:x]`
* out: `'!' + x + 'important'`

Примеры:

* `!important` -> `['important']`
* `!  /*test*/important` -> `['important', ['s', '  '], ['comment', 'test']]`

## CSS filter

### filter

### filterp

### filterv

### progid

## CSS at-rule

### atrules

### atruleb

### atruler

### atrulerq

### atrulers

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

### function

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
