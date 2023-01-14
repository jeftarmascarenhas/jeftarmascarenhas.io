import { Text, VStack } from '@chakra-ui/react'
import TitlePage from '@global-components/title-page'
import React from 'react'

const subtitles = [
  `Aprenda de forma fácil com conteúdo de qualidade e muita prática,
  entenda como é ser um dev no dia a dia, como estudar e realmente
  aprender.`,
  `O conhecimento adquerido nos cursos são testados para válidar se você
  realmente aprendeu.`
]

export default function HeaderCourses() {
  return (
    <VStack align="stretch" pr={{ base: '0', xl: '60' }} pb="10">
      <TitlePage title="Cursos" subtitles={subtitles} />
    </VStack>
  )
}
