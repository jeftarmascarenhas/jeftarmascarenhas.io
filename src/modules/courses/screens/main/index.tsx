import { Box, VStack } from '@chakra-ui/react'
import DefaultContainer from '@global-components/default-container'
import NewsletterSubscribe from '@global-components/newsletter-subscribe'
import Advantages from 'modules/courses/components/advantages'

import HeaderCourses from 'modules/courses/components/header-courses'
import ListCourses from 'modules/courses/components/list-courses'
import VideosFree from 'modules/courses/components/videos-free'
import MaxContent from '@global-components/max-content'

export default function CourseScreen() {
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
            <HeaderCourses />
            <Advantages />
          </MaxContent>
          <ListCourses />
        </VStack>
      </DefaultContainer>
      <Box
        px={{ base: 4, md: 10, lg: 20, xl: 40 }}
        bgColor="gray.100"
        py="10"
        mt="10"
      >
        <NewsletterSubscribe />
      </Box>
      <VideosFree />
    </>
  )
}
