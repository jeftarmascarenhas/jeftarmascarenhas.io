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
