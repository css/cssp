# Справочник по элементам дерева (проба пера)

## Примитивы

Токены, состоящие лишь из первого элемента (имя токена — строка) и строк.

### ident

Идентификатор: имена элементов, классов, функций и т.д.

* Ometa/JS: `['ident' :x]`
* JS: `['ident', x]`
* out: `x`

### atkeyword

Имя at-rule.

* Ometa/JS: `['atkeyword' :x]`
* JS: `['atkeyword', x]`
* out: `'@' + x`

### string

* Ometa/JS: `['string' :x]`
* JS: `['string', x]`
* out: `x`

### hash

* Ometa/JS: `['hash' :x]`
* JS: `['hash', x]`
* out: `'#' + x`

### number

* Ometa/JS: `['number' :x]`
* JS: `['number', x]`
* out: `x`

## Составные токены

### percentage (TODO)

* Ometa/JS: `['percentage' number:x]`
* JS: `['percentage', x]`
* out: `x + '%'`

### dimension

* Ometa/JS: `['dimension' number:x ident:y]`
* JS: `['dimension', x, y]`
* out: `x + y`
