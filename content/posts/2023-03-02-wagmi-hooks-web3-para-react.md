---
date: 2023-03-02 07:11:57
title: Wagmi Hooks Web3 para React
slug: wagmi-hooks-web3-react
thumbnail: /assets/img/wagmi-thumbnail.png
description: Hooks web3 para React que facilita muito nossa vida.
tags:
  - Web3
  - React
  - Blockchain
  - Ethereum
---
Fala Pessoal, bora falar sobre uma lib web3 para React que facilita muito nossa vida.

[Wagmi](https://wagmi.sh/) contém tudo que você precisa para começar a trabalhar com Ethereum através de hooks.

O [Wagmi](https://wagmi.sh/) facilita "Conectar carteira", exibir ENS(Ethereum names server) e informações de saldo, assinar mensagens, interagir com contratos e muito mais — tudo com armazenamento em cache, desduplicação de solicitações e persistência.

Vamos usar o [Wagmi](https://wagmi.sh/) React, o [Wagmi](https://wagmi.sh/) tem o módulo core e também uma [CLI](https://wagmi.sh/examples/connect-wallet).

***S﻿e quiser ver um exemplo você vá até [final deste artigo](#wagmi-exemplo)***

Crie um projeto React com o [Vite](https://vitejs.dev/), [Next.js](https://nextjs.org/) ou da forma que você mais gosta de trabalhar com React, após o projeto criado vamos a instalação da lib Wagmi.

Neste exemplo vamos usar os hooks [userConnect](https://wagmi.sh/react/hooks/useConnect), [useAccount](https://wagmi.sh/react/hooks/useAccount) e [useDisconnect](https://wagmi.sh/react/hooks/useDisconnect)

Instale as dependências abaixo no seu projeto React

```shell
yarn add wagmi ethers@^5
```

Primeiro vamos criar a configuração para usarmos no Wagmi provider. Na configuração do provider resumidamente temos os provedores web3 e os conectores.

Provedor é uma forma de se conectar a um Blockchain, parecido como você usa o axios ou fetch do javascript para conectar-se com um servidor/API. Como exemplo de provedor temos Alchemy, Infura ou mesmo uma wallet pode ser um provedor.

Conector são as múltiplas wallets que o usuário pode se conectar ao seu dApp.

### Provider

```javascript
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";

import { alchemyProvider } from "wagmi/dist/providers/alchemy";
import { publicProvider } from "wagmi/dist/providers/public";

import { CoinbaseWalletConnector } from "wagmi/dist/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/dist/connectors/injected";
import { MetaMaskConnector } from "wagmi/dist/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/dist/connectors/walletConnect";
import Profile from "./Profile";

// Configuração do chains e provider com Alchemy provider.
// os providers web3 mais famosos são Alchemy (alchemy.com) e Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: "yourAlchemyApiKey" }), publicProvider()]
);

// Configuração do cliente
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi"
      }
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true
      }
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true
      }
    })
  ],
  provider,
  webSocketProvider
});

// Vamos usar o client para o provider do Wagmi
export default function App() {
  return (
    <WagmiConfig client={client}>
      <Profile />
    </WagmiConfig>
  );
}
```

### U﻿sando Hooks

Após a configuração do Wagmi provider, vamos fazer a conexão com as wallets e mostrar informação do usuário conectado utilizando os hooks.

```javascript
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName
} from "wagmi";

export default function Profile() {
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const {
    connect,
    connectors,
    error,
    isLoading,
    pendingConnector
  } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div>
        <img src={ensAvatar} alt="ENS Avatar" />
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector.name}</div>
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && " (unsupported)"}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            " (connecting)"}
        </button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
}
```

<h3 id="wagmi-exemplo">Exemplo</h3>

O exemplo usa um provide público, o que pode não funcionar, use um provider como Alchemy.

<iframe src="https://codesandbox.io/embed/react-wagmi-hook-c9x9jg?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="React-Wagmi-hook"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

Existem vários hooks interessantes, além do poder customização de uma aplicação web3.

Chegou até aqui, compartilha e dá um saca no meu canal no [Youtube NFTChoose](https://www.youtube.com/@nftchoose).