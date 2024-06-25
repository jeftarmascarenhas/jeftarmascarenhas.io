import { VStack } from '@chakra-ui/react'
import TitlePage from '@global-components/title-page'
import React from 'react'
import { WorkSubtitles } from '@global-entities/work-journal'

interface HeaderCoursesProps {
  subtitles: WorkSubtitles[]
}

export default function HeaderCourses({ subtitles }: HeaderCoursesProps) {
  return (
    <VStack align="stretch" pr={{ base: '0', xl: '60' }} pb="10" maxWidth={984}>
      <TitlePage title="Cursos" subtitles={subtitles} />
    </VStack>
  )
}
