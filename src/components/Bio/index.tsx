import { Box, HStack, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineGithub
} from 'react-icons/ai'

export default function Bio() {
  return (
    <SimpleGrid
      as="section"
      columns={{ base: 1, lg: 2, xl: 2 }}
      alignItems="center"
    >
      <VStack align="stretch" order={{ base: 1, md: 0 }} spacing="4">
        <Text
          as="h1"
          fontSize={{ base: '5xl', md: '7xl' }}
          fontWeight="semibold"
        >
          Fala Pessoal
        </Text>
        <Text as="p" fontSize="larger">
          Sou Jeftar Mascarenhas, desde de 2011 venho trabalhando com
          desenvolvimento web/mobile com JavaScript e muitas libs e frameworks.
          :)
        </Text>
        <Text as="p" fontSize="larger" pt="2">
          Atualmente trabalho como Blockchain Engineer e tenho o canal{' '}
          <Box
            as={Link}
            href="https://www.youtube.com/@nftchoose"
            textDecoration="underline"
            cursor="pointer"
          >
            @NFT Choose
          </Box>{' '}
          Onde ajudo as pessoas que trabalham ou querem entrar no mundo web3
        </Text>
        <HStack>
          <Link
            href="https://www.linkedin.com/in/jeftarmascarenhas/"
            target="_blank"
          >
            <AiFillLinkedin size={30} />
          </Link>
          <Link href="https://twitter.com/jeftar" target="_blank">
            <AiFillTwitterCircle size={30} />
          </Link>
          <Link href="https://github.com/jeftarmascarenhas" target="_blank">
            <AiOutlineGithub size={30} />
          </Link>
        </HStack>
      </VStack>
      <Box justifySelf="center">
        <Box
          rounded="full"
          position="relative"
          overflow="hidden"
          width={{ base: 190, md: 380, xl: 480 }}
          height={{ base: 190, md: 380, xl: 480 }}
        >
          <Image
            src="/assets/images/profile.jpeg"
            fill
            style={{
              objectFit: 'cover'
            }}
            alt="Jeff Mascarenhas"
            // placeholder="blur"
          />
        </Box>
      </Box>
    </SimpleGrid>
  )
}
