import { Box, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const LINKS_DATA = [
  {
    id: 1,
    title: 'Vídeos',
    link: `/videos`,
    description: `Aproveite os vídeos que faço com amor para todos o vocês.`
  },
  {
    id: 2,
    title: 'Cursos',
    link: `/courses`,
    description: `O objetivo com os cursos é fazer um conteúdo diferenciado com o foco no mundo real e bastante prática.`
  }
  // {
  //   id: 3,
  //   title: 'Mentorias',
  //   link: `/mentoring`,
  //   description: `O objetivo é entender as necessidades do mentorado(s) e a partir delas que a mentoria é organizada.

  //   Assim a mentoria pode atender diversos formatos e ter inúmeros procedimentos diferentes tanto para empresas ou indiviual.`
  // },
  // {
  //   id: 4,
  //   title: 'Experiência',
  //   link: `/experiencies`,
  //   description: `Tenho experiências nas seguintes áreas, Front-end, Back-end e Blockchain Ethereum.
  //   Minha Principal experiência é com Front-end e Javascript, mais adoro Rust e Solidity.
  //   `
  // }
]

export default function Links() {
  return (
    <SimpleGrid as="section" columns={{ base: 1, md: 2 }} spacing={10}>
      {LINKS_DATA.map(linkItem => (
        <VStack align="stretch" key={linkItem.id} cursor="pointer">
          <Link href={linkItem.link}>
            <HStack align="center">
              <Text as="h2" fontWeight="medium" fontSize="40">
                {linkItem.title}
              </Text>
              <MdOutlineKeyboardArrowRight size={40} />
            </HStack>
            <VStack align="stretch" spacing={2} fontSize="lg">
              <Text>{linkItem.description}</Text>
            </VStack>
          </Link>
        </VStack>
      ))}
    </SimpleGrid>
  )
}
