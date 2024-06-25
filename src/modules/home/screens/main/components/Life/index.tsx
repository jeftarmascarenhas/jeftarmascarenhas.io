import { Box, Text, VStack } from '@chakra-ui/react'
import TitlePage from '@global-components/title-page'
import Image from 'next/image'
import React from 'react'
import { WorkSubtitles } from '@global-entities/work-journal'

const subtitles: WorkSubtitles[] = [
  {
    title: `Nasci em Recife onde moro até hoje.`
  },
  {
    title: `Recife é um lugar maravilho, com praias e pessoas maravilhosas.
  Conheci algumas cidades como São Paulo e Minas Gerais onde tive ótimas
  experiências.`
  }
]

export default function Life() {
  return (
    <VStack align="stretch" as="section">
      <Box as="article" mb="4">
        <TitlePage title="Vida" subtitles={subtitles} />
      </Box>

      <VStack>
        <Image
          src="/assets/images/boa-viagem.jpeg"
          alt="Boa viagem"
          width={1994}
          height={703}
          style={{
            borderRadius: '0.5rem'
          }}
        />
        <Text
          textAlign="center"
          color="GrayText"
          fontSize="sm"
          fontWeight="semibold"
        >
          Recife-PE, Brasil. Praia de Boa Viagem
        </Text>
      </VStack>
    </VStack>
  )
}
