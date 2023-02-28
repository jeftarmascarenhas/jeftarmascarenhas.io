import { VStack } from '@chakra-ui/react'
import JournalWeek from '../journal-week'

const yearsData = [
  {
    id: 0,
    title: `2 de Janeiro, 2023`,
    subtitle: `Foco em melhorar meus conhecimentos em arquitetura de projetos e blockchain`,
    infos: [
      {
        id: 0,
        title: `Trabalho`,
        items: [
          {
            id: 0,
            title: `Vídeos para playlist Minicurso Ethers.js`,
            link: `https://youtu.be/seym2JW_0Bg`
          }
        ]
      },
      {
        id: 1,
        title: `Coisas Interessantes`,
        items: [
          {
            id: 0,
            title: `Novo EIP-3475 para criação de bonds totalmente on chain.`,
            link: `https://eips.ethereum.org/EIPS/eip-3475`
          }
        ]
      }
    ]
  },
  {
    id: 1,
    title: `9 de Janeiro, 2023`,
    subtitle: `Treinamento e novos estudos`,
    infos: [
      {
        id: 0,
        title: `Trabalho`,
        items: [
          {
            id: 0,
            title: `Finalizando o treinamento Front-end/React Para GW Sistemas. Treinamento focado criação de componentes
            reutilizáveis, arquitetura de projeto e code style.`,
            link: `https://www.gwsistemas.com.br/`
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: `16 de Janeiro, 2023`,
    subtitle: `Finalizando entregas e iniciando novas`,
    infos: [
      {
        id: 0,
        title: `Trabalho`,
        items: [
          {
            id: 0,
            title: `Gravei o últimos vídeos do Minicurso Ethers.js onde mostro como fazer deploy no blockchain da Ethereum e na polygon.
            Veja os vídeos #10 e o #11`,
            link: `https://www.youtube.com/watch?v=qKb0I1vpIdY&list=PLPPrIZLm5juZfG49vbjRVti1NwAZ_IrdA&index=16`
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: `27 de Fevereiro, 2023`,
    subtitle: `Semana de entregas para começa março focado em meu novo desafio.`,
    infos: [
      {
        id: 0,
        title: `Trabalho`,
        items: [
          {
            id: 0,
            title: `Entrega da versão beta do app da GW Sistemas`,
            link: ''
          },
          {
            id: 2,
            title: `Projeto feito com Strapi e deploy no Heroku`,
            link: ``
          },
          {
            id: 2,
            title: `Criei a lista de assuntos que farei vídeos para o canal NFTChoose`,
            link: `https://www.youtube.com/@nftchoose`
          }
        ]
      },
      {
        id: 0,
        title: `Coisas Interessantes`,
        items: [
          {
            id: 0,
            title: `Li um artigo interessante sobre React Query vs SWR. Vale apena conferir, tá em Inglês. Pretendo fazer um vídeo sobre e um artigo.`,
            link: 'https://statusneo.com/react-query-vs-swr-which-data-fetching-solution-is-right-for-you/#:~:text=React%20Query%20vs%20SWR%3APerformance&text=With%20React%20Query%2C%20components%20will,need%20to%20use%20that%20data.'
          },
          {
            id: 0,
            title: `Estou estudando sobre Hook compartilhável no React, uma abordagem muito interessante quando você não quer compartilhar globalmente as informações, mais assim, com vários componentes de uma mesma página. Pode ser utilizado de forma global evitando um context api.`,
            link: 'https://statusneo.com/react-query-vs-swr-which-data-fetching-solution-is-right-for-you/#:~:text=React%20Query%20vs%20SWR%3APerformance&text=With%20React%20Query%2C%20components%20will,need%20to%20use%20that%20data.'
          }
        ]
      }
    ]
  }
].sort((a, b) => {
  if (a.id < b.id) return 1
  if (a.id > b.id) return -1
  return 0
})

export default function JournalList() {
  return (
    <VStack spacing="8" as="article" align="stretch">
      {yearsData?.length &&
        yearsData.map(week => <JournalWeek week={week} key={week.id} />)}
    </VStack>
  )
}
