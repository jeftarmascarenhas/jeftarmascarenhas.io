import { Box, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function Life() {
  return (
    <VStack align="stretch" as="section">
      <Box as="article" mb="4">
        <Text as="h2" fontSize="7xl" fontWeight="semibold">
          Vida
        </Text>
        <Text fontSize="large">Nasci em Recife onde moro até hoje.</Text>
        <Text fontSize="large">
          Recife é um lugar maravilho, com praias e pessoas maravilhosas.
          Conheci algumas cidades como São Paulo e Minas Gerais onde tive ótimas
          experiências.
        </Text>
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
