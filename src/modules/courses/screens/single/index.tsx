import { Box, VStack } from '@chakra-ui/react'
import DefaultContainer from '@global-components/default-container'
import MaxContent from '@global-components/max-content'
import Advantages from '@global-modules/courses/components/advantages'
import CourseHeader from './components/course-header'
import Bio from '@global-components/Bio'

export default function index() {
  return (
    <>
      <DefaultContainer>
        <VStack
          align="stretch"
          pt={{ base: 10 }}
          px={{ base: 4, lg: 16 }}
          spacing="10"
        >
          <MaxContent>
            <CourseHeader />
            <Box mt="16">
              <Advantages />
            </Box>
            <Box mt="16">
              <Bio />
            </Box>
          </MaxContent>
        </VStack>
      </DefaultContainer>
    </>
  )
}
