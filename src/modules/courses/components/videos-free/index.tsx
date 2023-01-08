import { SimpleGrid, Button, Box, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function VideosFree() {
  return (
    <SimpleGrid
      columns={{ base: 1, xl: 2 }}
      spacing="12"
      color="white"
      as="section"
      alignItems="center"
      px={{ base: 4, md: 10, lg: 20, xl: 40 }}
      py="16"
      minHeight="80vh"
      _after={{
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      }}
      position="relative"
    >
      <Image
        src="/assets/images/courses/videos-free-v2.jpeg"
        fill
        style={{ objectFit: 'cover' }}
        alt="Vídeos Free"
      />
      <VStack spacing="8" align="stretch" zIndex="1">
        <VStack align="stretch">
          <Text
            color="white"
            as="h2"
            fontSize="7xl"
            fontWeight="semibold"
            lineHeight={1.2}
            mb="12"
          >
            Cursos e vídeos grátis no{' '}
            <Text as="span" color="red">
              YouTube
            </Text>
          </Text>
          <Text color="white" as="p" fontSize="larger" fontWeight="semibold">
            Aprenda de forma fácil com conteúdo de qualidade e muita prática,
            entenda como é ser um dev no dia a dia, como estudar e realmente
            aprender.
          </Text>
          <Text color="white" as="p" fontSize="larger" fontWeight="semibold">
            Não seja mais um copiador de código, aprenda de verdade!
          </Text>
        </VStack>
      </VStack>
      <Button
        zIndex="1"
        colorScheme="red"
        textTransform="uppercase"
        size="lg"
        rounded="full"
        fontSize="2xl"
        as={Link}
        href="https://www.youtube.com/@nftchoose"
        target="_blank"
      >
        Ir para YouTube
      </Button>
    </SimpleGrid>
  )
}
