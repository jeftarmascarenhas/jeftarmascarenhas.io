---
date: '2020-02-08 01:37:28'
title: Você já utilizou o React Native Doctor?
description: Verifique se seu ambiente está com algum problema
tags:
  - React
  - React Native
  - JavasScript
  - DicasJS
  - QuickTips
---
Para você que quer saber já de cara o que é react native doctor, ele é um comando utilizado para verificar como está seu ambiente de desenvolvimento.

```javascript
react-native doctor
```

O doctor surgiu de pedidos da comunidade do React, mais de 20 pull request e ajuda de 6 colaboradores. Viva a comunidade do React!

### Sim, Como funciona pai?

Ele faz uma analise do seu ambiente de desenvolvimento para encontrar problemas em seu ambiente de **DEV** dando a opção de corrigi-los automaticamente.

 _**Sua interface é inspirada no Jest, veja como ele exibe os outputs:**_ 

![React Native Doctor](/assets/img/screen-shot-2020-02-08-at-13.21.18.png "Comando React Native doctor em ação")

Se não for possível corrigir automaticamente o `react-native doctor` exibirá uma mensagem e um link útil explicando como corrigi-lo manualmente.

![](/assets/img/screen-shot-2020-02-08-at-13.26.47.png)

O comando `react-native doctor` está disponível a partir da versão 0.62. Aí você faz não estou usando uma versão inferior :(, calma jovem você pode utilizar-lo sem atualizar sua versão do RN com o seguinte comando:


```
npx @react-native-community/cli doctor
```


O React Native `doctor` suporta a maioria das bibliotecas e software utilizado no ecossistema do RN, como CocoaPods, Xcode e Android SDK.

Se você não quer testar agora, veja esse vídeo rápido do `react-native doctor` em ação.

https://facebook.github.io/react-native/img/homepage/DoctorCommand.mp4

Segue um checklist do que o Doctor verificar e suporta atualmente.

Para o sistema no geral ele checa:
- Node.js (>= 8.3)
- yarn (>= 1.10)
- npm (>= 4)
- Watchman (>= 4)

Para android ele checa:
- Android SDK (>= 26)
- Android NDK (>= 19)
- `ANDROID_HOME`, variável de ambiente que é exigida pela configuração do SDK Android.

Para IOS ele checa:
- Xcode (>= 10)
- CocoaPods, ferramenta de gerenciamento de dependência de biblioteca para aplicativos iOS.
- ios-deploy (opcional), biblioteca usada internamente pela CLI para instalar aplicativos em um dispositivo iOS físico.

Fiz esse post inspirado no post React Native Doctor do site oficial do React Native. Segue o link do short post feito por eles explicando o comando `doctor`.

[Doc and blog React Native]: https://facebook.github.io/react-native/blog/2019/11/18/react-native-doctor
