# CSSP API

## Подключение API

При установленном CSSP подключение API происходит так: `require('cssp')`. После чего использовать API можно примерно так:

    var cssp = require('cssp'),
        src = 'a { color: red }',
        tree;
    ..
    tree = cssp.parse(src);
    ..

## P: разбор CSS в дерево

Функция: `parse(src, rule, parser)`

## TF: трансформация

Функция: `transform(tree, rule, transformer)`

## TL: трансляция

Функция: `translate(tree, rule, translator)`

## CMP: сжатие

Функция: `compress(tree, rule, config)`

## Сериализация дерева в строку

Функция: `treeToString(tree, level)`

## Вывод дерева на консоль

Функция: `printTree(tree)`
