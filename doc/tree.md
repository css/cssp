# Справочник по элементам дерева (проба пера)

## Примитивы

Токены, состоящие лишь из первого элемента (имя токена — строка) и строк.

### ident

Идентификатор: имена элементов, классов, функций и т.д.

* Ometa/JS: `['ident' :x]`
* JS: `['ident', x]`
* out: `x`

Примеры:

* `rgb` -> `['ident', 'rgb']`

### atkeyword

Имя at-rule.

* Ometa/JS: `['atkeyword' :x]`
* JS: `['atkeyword', x]`
* out: `'@' + x`

Примеры:

* `@charset` -> `['atkeyword', 'charset']`

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

* Ometa/JS: `['number' :x]`
* JS: `['number', x]`
* out: `x`

Примеры:

* `10` -> `['number', '10']`

## Составные токены

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
