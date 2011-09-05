# CSSP API

## Подключение API

При установленном CSSP подключение API происходит так: `require('cssp')`. После чего использовать API можно примерно так:

    var cssp = require('cssp'),
        src = 'a { color: red }',
        tree;
    ..
    tree = cssp.parse(src);
    ..

## Получение объектов CSSP

    ..
    var CSSParser = require('cssp').CSSParser,
        CSSTransformer = require('cssp').CSSTransformer,
        CSSTranslator = require('cssp').CSSTranslator;
    ..

## P: разбор CSS в дерево

Функция: `tree = parse(src, [rule = 'stylesheet'], [parser = undefined])`

Аргументы:

* `src`&nbsp;— исходный текст CSS в виде строки; обязательно.
* `rule`&nbsp;— правило максимального уровня; опционально.
* `parser`&nbsp;— парсер, который следует соединить с базовым парсером; опционально.

Возвращает: дерево, представляющее исходный CSS.

## TF: трансформация

Функция: `tree = transform(tree, [rule = 'stylesheet'], [transformer = undefined])`

Аргументы:

* `tree`&nbsp;— дерево для трансформации; обязательно.
* `rule`&nbsp;— правило максимального уровня; опционально.
* `transformer`&nbsp;— трансформер, который следует соединить с базовым трансформером; опционально.

Возвращает: дерево после трансформации; если не был указан `transformer`, результат равен исходному дереву.

## TL: трансляция

Функция: `src = translate(tree, [rule = 'stylesheet'], [translator = undefined])`

Аргументы:

* `tree`&nbsp;— дерево для трансляции; обязательно.
* `rule`&nbsp;— правило максимального уровня; опционально.
* `translator`&nbsp;— транслятор, который следует соединить с базовым транслятором; опционально.

Возвращает: текст CSS в виде строки.

## Сериализация дерева в строку

Функция: `str = treeToString(tree, [level = 0])`

Возвращает: дерево в виде отформатированной строки.

Аргументы:

* `tree`&nbsp;— дерево для сериализации в строку.
* `level`&nbsp;— уровень начального отступа.

## Вывод дерева на консоль

Функция: `printTree(tree)`

Аргументы:

* `tree`&nbsp;— дерево для вывода на консоль.
