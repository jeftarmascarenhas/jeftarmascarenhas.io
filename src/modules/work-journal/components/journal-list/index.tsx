import { VStack } from '@chakra-ui/react'
import JournalWeek from '../journal-week'

const yearsData = [
  {
    id: 0,
    title: `Semana de Dezembro 12º, 2022`,
    subtitle: `Coisas que estou trabalhando e estudando. Atualizado toda semana.`,
    infos: [
      {
        id: 0,
        title: `Trabalho`,
        items: [
          {
            id: 0,
            title: `Coisas que estou trabalhando e estudando. Atualizado toda semana.`,
            link: `https://www.google.com/`
          },
          {
            id: 1,
            title: `Coisas que estou trabalhando e estudando. Atualizado toda semana.`,
            link: `https://www.google.com/`
          },
          {
            id: 2,
            title: `I started the Remix Jokes tutorial app and am really enjoying it so far! Since using Hasura I've been allergic to the idea of writing a lot of server-side boilerplate code (think controllers in Rails), but the action->Prisma flow is pretty good so far. Excited to finish the tutorial then use it as a starting point for a new side project idea I have on tracking lifts at the gym!`,
            link: `https://www.google.com/`
          }
        ]
      },
      {
        id: 1,
        title: `Coisas Interessantes`,
        items: [
          {
            id: 0,
            title: `Coisas que estou trabalhando e estudando. Atualizado toda semana`,
            link: `https://www.google.com/`
          },
          {
            id: 2,
            title: `I started the Remix Jokes tutorial app and am really enjoying it so far! Since using Hasura I've been allergic to the idea of writing a lot of server-side boilerplate code (think controllers in Rails), but the action->Prisma flow is pretty good so far. Excited to finish the tutorial then use it as a starting point for a new side project idea I have on tracking lifts at the gym!`,
            link: `https://www.google.com/`
          }
        ]
      }
    ]
  }
]

export default function JournalList() {
  return (
    <VStack spacing="8" as="article">
      {yearsData?.length &&
        yearsData.map(week => <JournalWeek week={week} key={week.id} />)}
    </VStack>
  )
}
