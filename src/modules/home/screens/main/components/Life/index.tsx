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
        <Text fontSize="large">
          Estou em Recife, minha vida inteira, trabalhando, conhecindo pessoas
          novas e o mais importante, tenho uma família maravilhosa.
        </Text>
        <Text fontSize="large">
          Moro em Recife a capital de Pernambuco esse estado do Brasil o qual
          amo demais.
        </Text>
      </Box>

      <Image
        src="/assets/images/boa-viagem.jpeg"
        alt="Boa viagem"
        width={1994}
        height={703}
        style={{
          borderRadius: '0.5rem'
        }}
      />
    </VStack>
  )
}
