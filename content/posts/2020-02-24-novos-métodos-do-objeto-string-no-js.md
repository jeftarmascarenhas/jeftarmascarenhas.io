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

### sintaxe
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
