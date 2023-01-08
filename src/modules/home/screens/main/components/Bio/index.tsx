import { Box, HStack, Text, VStack, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineGithub
} from 'react-icons/ai'

export default function Bio() {
  return (
    <SimpleGrid
      as="section"
      columns={{ base: 1, lg: 2, xl: 2 }}
      alignItems="center"
    >
      <VStack align="stretch" order={{ base: 1, md: 0 }}>
        <Text as="h1" fontSize="7xl" fontWeight="semibold">
          Fala Pessoal
        </Text>
        <Text as="p" fontSize="larger">
          Sou Jeftar Mascarenhas, desde de 2012 venho trabalhando com
          desenvolvimento web focado em Javascript UI developer na web.
        </Text>
        <Text as="p" fontSize="larger" pt="2">
          Recentemente estou trabalhando com Nodejs e desenvolvimento
          Blockchain, onde tenho o canal{' '}
          <Box as={Link} href="#" textDecoration="underline" cursor="pointer">
            @NFT Choose
          </Box>{' '}
          e alguns Cursos
        </Text>
        <HStack>
          <Link href="#">
            <AiFillLinkedin size={20} />
          </Link>
          <Link href="#">
            <AiFillInstagram size={20} />
          </Link>
          <Link href="#">
            <AiOutlineGithub size={20} />
          </Link>
        </HStack>
      </VStack>
      <Box justifySelf="center">
        <Box
          rounded="full"
          position="relative"
          overflow="hidden"
          width={{ base: 190, md: 380, lg: 480 }}
          height={{ base: 190, md: 380, lg: 480 }}
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
