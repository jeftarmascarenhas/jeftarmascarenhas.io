import { VStack } from '@chakra-ui/react'
import JournalWeek from '../journal-week'
import { Props } from './types'

export default function JournalList({ yearsData }: Props) {
  return (
    <VStack spacing="8" as="article" align="stretch">
      {yearsData?.length &&
        yearsData.map(week => <JournalWeek week={week} key={week.id} />)}
    </VStack>
  )
}
