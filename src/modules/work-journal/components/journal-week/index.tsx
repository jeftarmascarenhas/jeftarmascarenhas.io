import { Box, Text, VStack } from '@chakra-ui/react'
import WeekItems from '../week-items'
import { Props } from './types'

export default function JournalWeek({ week }: Props) {
  return (
    <VStack align="stretch" spacing={{ base: 6, md: 10 }}>
      <VStack align="stretch">
        <Text fontSize="3xl" fontWeight="bold" as="h2">
          {week.title}
        </Text>
        {week?.subtitle && (
          <Text fontSize="lg" as="h3">
            {week.subtitle}
          </Text>
        )}
      </VStack>
      <Box pl={{ base: 4, md: 8 }} bgColor="-moz-initial">
        {week?.infos.length &&
          week.infos.map(info => <WeekItems info={info} key={info.id} />)}
      </Box>
    </VStack>
  )
}
