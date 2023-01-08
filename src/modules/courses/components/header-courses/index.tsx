import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function HeaderCourses() {
  return (
    <VStack align="stretch" pr={{ base: '0', xl: '60' }} pb="10">
      <Text as="h1" fontSize={{ base: '6xl', xl: '7xl' }} fontWeight="semibold">
        Cursos
      </Text>
      <Text as="p" fontSize="larger">
        Aprenda de forma fácil com conteúdo de qualidade e muita prática,
        entenda como é ser um dev no dia a dia, como estudar e realmente
        aprender.
      </Text>
      <Text as="p" fontSize="larger">
        O conhecimento adquerido nos cursos são testados para válidar se você
        realmente aprendeu.
      </Text>
    </VStack>
  )
}
