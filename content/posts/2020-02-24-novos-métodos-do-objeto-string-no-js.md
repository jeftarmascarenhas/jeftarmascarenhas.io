---
date: '2020-02-24 01:25:57'
title: Novos métodos do Objeto String no JS
description: Conheça os novos métodos de String que são úteis para trabalhar no dia a dia.
tags:
  - Javascript
  - Objeto String
  - String Javascript
  - Métodos string
---
***Estou de volta com mais um post da serie dicas rápidas de Javascript(JS Quick Tips).***

Vou falar sobre 4 não tão novos métodos assim, mais são novos.

## 1. startsWith 
O startsWith é método que valida se uma string inicia com um terminado valor.

### Sintaxe
starts(inicia)Width(Com)
```javascript
str.startsWith(searchString, [position])
```
searchString: caracteres a serem procurados, position(opcional): posição que iniciará a pesquisa(searchString)

### Exemplo:
```javascript
const description = 'Javascript é cool, Frameworks são bons se você foca mais no JS do que no Framework.'

description.startsWith('Javascript é') // true
description.startsWith('Frameworks são') // false
description.startsWith('é cool', 11) // true 'Javascript ' são 11 posições devido ao espaço que é um caracter.
```

## 2. endsWith
Basicamente é método faz o oposto do método starsWith verifica se uma string termina com um determinado valor.

### Sintaxe
```javascript
str.endsWith(stringSendoBuscada[, tamanho])
```
***Atenção a opção tamanho(opcional): se informada substitui o tamanho da string(texto) pesquisada.***

### Exemplo:
```javascript
const description = 'Javascript é cool, Frameworks são bons se você foca mais no JS do que no Framework.'

description.endsWith('no Framework.') // true
description.endsWith('foca mais no JS.') // false
description.endsWith('Frameworks são bons', 38) // true esse 38 é length do texto até a palavra 'bons'
```

## 3. Repeat
O método `repeat()` retorna uma nova string com determinado número de copias concatenadas.

### Sintaxe
```javascript
str.repeat(count);
```
O parâmetro `count` deve ser um valor inteiro que indica qual número de repetições, se for passado um número negativo -1 será apresentado um RangeError.

### Exemplo:
```javascript
const study = 'Vou estudar ';
study.repeat(-1) // RangeError Invalid count value
study.repeat(0) // ''
study.repeat(2) // 'Vou estudar Vou estudar Vou estudar'
study.repeat(2.5) // converte para inteiro
study.repeat(1/0) // RangeError Invalid count value
study.repeat(4/2) // 'Vou estudar Vou estudar '
```
