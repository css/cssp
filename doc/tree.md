# Справочник элементов дерева

### stylesheet

### ruleset

### atruler

### atruleb

### atrules

### atkeyword

Имя at-rule.

* Ometa/JS: `['atkeyword' ident:x]`
* JS: `['atkeyword', x]`
* out: `'@' + x`

Примеры:

* `@charset` -> `['atkeyword', ['ident', 'charset']]`

Ссылки: [ident][ident]

### selector

### simpleselector

[ident]:### ident

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

### delim

Разделитель простых селекторов (см. simpleselector).

* Ometa/JS: `['delim']`
* JS: `['delim']`
* out: `,`

Примеры:

* `<simpleselector>,<simpleselector>` -> `<simpleselector>['delim']<simpleselector>`

### decldelim

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
