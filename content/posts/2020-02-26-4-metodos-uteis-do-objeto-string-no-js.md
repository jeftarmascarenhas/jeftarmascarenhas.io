---
date: '2020-02-26 12:47:36'
title: 4 Métodos úteis do Objeto String no JS
slug: 4-metodos-uteis-do-objeto-string-no-js
image: /assets/img/string-methods.png
description: Conheça os novos métodos de String que são úteis para trabalhar no dia a dia.
tags:
  - Javascript
  - Objeto String
  - Métodos string
---
***Estou de volta com mais um post da serie dicas rápidas de Javascript(JS Quick Tips).***

Vou falar sobre 4 não tão novos métodos assim.

## 1. startsWith 

O startsWith é método que valida se uma string inicia com um determinado valor.

### Sintaxe

starts(inicia)Width(Com)
```javascript
str.startsWith(searchString, [position])
```
**searchString:** caracteres a serem procurados, **position(opcional):** posição que iniciará a pesquisa(searchString)

### Exemplo

```javascript
const description = 'Javascript é cool, Frameworks são bons se você foca mais no JS do que no Framework.'

console.log(description.startsWith('Javascript é')) // true

console.log(description.startsWith('Frameworks são')) // false console.log(description.startsWith('é cool', 11)) // true 'Javascript ' são 11 posições devido ao espaço que também é um caracter.
```
## 2. endsWith 

Basicamente é método faz o oposto do método starsWith verifica se uma string termina com um determinado valor.

### Sintaxe

```javascript
str.endsWith(stringSendoBuscada[, tamanho])
```
Atenção a opção **tamanho(opcional):** se informada substitui o tamanho da string(texto) pesquisada.

### Exemplo

```javascript 
const description = 'Javascript é cool, Frameworks são bons se você foca mais no JS do que no Framework.'

console.log(description.endsWith('no Framework.')) // true
console.log(description.endsWith('foca mais no JS.')) // false console.log(description.endsWith('Frameworks são bons', 38)) // true esse 38 é length do texto até a palavra 'bons'
```
## 3. Repeat 

O método **repeat()** retorna uma nova string com determinado número de copias concatenadas.

### Sintaxe

```javascript
str.repeat(count);
```

O parâmetro **count** deve ser um valor inteiro que indica qual número de repetições, se for passado um número negativo -1 será apresentado um RangeError.

### Exemplo

```javascript
const study = 'Vou estudar ';

console.log(study.repeat(-1)) // RangeError Invalid count value 
console.log(study.repeat(0)) // ''console.log(study.repeat(2)) // 'Vou estudar Vou estudar Vou estudar'
console.log(study.repeat(2.5)) // converte para inteiro
console.log(study.repeat(1/0)) // RangeError Invalid count value
console.log(study.repeat(4/2)) // 'Vou estudar Vou estudar '
```

## 3. Include 

Com método **include()** você faz uma busca em uma string para saber se a string tem determinado valor retornando ` true ` ou ` false `.

### Sintaxe

```javascript
str.includes(searchString[, position])
```

**position(opcional):** índice onde começar a busca.

### Exemplo

```javascript

const anyPhrase = 'Sempre tenha foco, cumpra suas metas para ter mais tempo para sua vida particular.'

console.log(anyPhrase.includes('cumpra suas metas')) // true

console.log(anyPhrase.includes('achei o texto')) // false

console.log(anyPhrase.includes('cumpra suas metas', 1)) //true

console.log(anyPhrase.includes('Sempre tenha foco', 1)) // false
```
São esses 4 métodos simples que podem ser úteis, você sabendo utilizar. Deixa no comentário o que tá achando dos posts.

## Bônus

Talvez você não saiba, mais String são iterable(iteráveis), ou seja, você pode usar o ```for of``` spread operator ```...string```

### Exemplo

```javascript
const myStringIterable = 'Eu sou iterável'

for(chart of myStringIterable) {
 console.log(chat) 
// 'E' 'u' ' ' 's' 'o' 'u' ' ' 'i'  't' 'e' 'r' 'á' 'v' 'e' 'l'
}

const myStringIterableArray = [...myStringIterable]

console.log(myStringIterableArray)
/* testa no teu inspetor de elemento vai mostrar um array de 39 posições, que não vou escrever aqui por já escrevi de mais nesse post \0/.*/
```
### Nota

Esse post foi tirado do nosso amado developer.mozilla e outros blogs.
Deixa teu comentário para me ajudar a saber se foi relevante esse post ou não.
