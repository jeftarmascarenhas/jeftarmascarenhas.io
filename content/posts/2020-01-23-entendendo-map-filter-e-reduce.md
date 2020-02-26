---
date: '2020-01-23 09:17:29'
title: 'Entendendo Map, Filter e Reduce'
description: Aprenda de forma simples a utilizar e responder esses métodos
tags:
  - Javascript
  - QuickTips
  - JS
  - dicasJS
  - Array
---
***Estou começando uma serie de dicas rápidas de JavaScript(JS Quick Tips)***

Sabe em entrevista quando te perguntam sobre alguns métodos de array no JS, você utiliza esses métodos, mais não sabe explicar?

## Segue abaixo possíveis respostas.
Nosso Array de exemplo:
```javascript
const users = [
  {
    id: 1,
    name: 'Jeftar Mascarenhas',
    age: 33,
    role: 'Developer',
    roleId: 2
  },
  {
    id: 2,
    name: 'Bores Jonson',
    age: 23,
    role: 'UI Design',
    roleId: 1
  },
  {
    id: 3,
    name: 'Arthur Davis',
    age: 20,
    role: 'Developer',
    roleId: 2
  },
]
```
## Map
Se você tem uma matriz de array e quer transformar cada um dos itens.
O resultado será uma nova matriz com o mesmo tamanho.

```javascript
const users = [...]

const map = users.map(item => ({
  id: item.id,
  roleId: item.roleId,
  role: item.role,
}))

/*
  result
  [
    {id: 1, roleId: 2, role: "Developer"},
    {id: 2, roleId: 1, role: "UI Design"},
    {id: 3, roleId: 2, role: "Developer"},
  ]
*/
```
## Filter
Se você tem um array e quer filtrar terminados items.

O resultado é uma nova matriz com os mesmos itens, mais com alguns excluídos, porem comprimento será o mesmo(se um nenhum valor for omitido) ou menor que original.

Dependendo da condição pode vir um array vazio.

```javascript
const users = [...]

const filter = users.filter(item => item.roleId === 1)

/*
  result
  [
    {id: 2, roleId: 1, role: "UI Design"},
  ]
*/
```

### Reduce

Você tem uma matriz de itens e deja calcular algum valor novo inteirando cada item.

O resultado poder ser qualquer coisa, outra matriz, um novo objeto, um valor booleano...
```javascript
const reduce = users.reduce((acumulator, current, idx) => {
  acumulator.employeeTypes[idx] = { id: current.roleId, name: current.role }
  return
}, {
  employeeTypes: []
})

/*
  result
  {
    employeeTypes: [
      {id: 1, name: "Developer"},
      {id: 2, name: "UI Design"},
      {id: 2, name: "Developer"},
    ]
  }
*/
```

É isso, dicas rápidas para ajudar a quem precisa.
