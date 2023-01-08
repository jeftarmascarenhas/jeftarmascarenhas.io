import { Text, Box } from '@chakra-ui/react'
import uuid from 'react-uuid'

export type Props = {
  title: string
  subtitles?: string[]
}

export default function TitlePage({ title, subtitles }: Props) {
  return (
    <Box>
      <Text as="h1" fontSize="7xl" fontWeight="semibold">
        {title}
      </Text>
      {subtitles?.length &&
        subtitles.map(subtitle => (
          <Text as="p" key={uuid()} fontSize="larger">
            {subtitle}
          </Text>
        ))}
    </Box>
  )
}
