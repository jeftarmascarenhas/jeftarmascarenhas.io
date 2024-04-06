import uuid from 'react-uuid'
import { Text, Box } from '@chakra-ui/react'
import { WorkSubtitles } from '@global-entities/work-journal'

export type Props = {
  title: string
  subtitles?: WorkSubtitles[]
}

export default function TitlePage({ title, subtitles }: Props) {
  return (
    <Box>
      <Text
        as="h1"
        fontSize={{ base: '5xl', md: '7xl' }}
        fontWeight={{ base: 'black', md: 'semibold' }}
      >
        {title}
      </Text>
      {subtitles?.length &&
        subtitles.map(subtitle => (
          <Text as="p" key={uuid()} fontSize="larger" mt={{ base: 6, md: 6 }}>
            {subtitle?.title}
          </Text>
        ))}
    </Box>
  )
}
