import { NextSeo } from 'next-seo'
import { Box, VStack } from '@chakra-ui/react'
import Advantages from 'modules/courses/components/advantages'
import DefaultContainer from '@global-components/default-container'
import NewsletterSubscribe from '@global-components/newsletter-subscribe'

import MaxContent from '@global-components/max-content'
import VideosFree from 'modules/courses/components/videos-free'
import ListCourses from 'modules/courses/components/list-courses'
import HeaderCourses from 'modules/courses/components/header-courses'

import { Props } from './types'

export default function CourseScreen({ page }: Props) {
  const subtitles = page.subtitles.map(title => ({ title }))

  return (
    <>
      <NextSeo
        description={page?.description}
        title="Cursos | Jeftar Mascarenhas"
        openGraph={{
          images: [
            {
              url: 'https://jeftar.com.br/assets/images/covers/courses-cover.png',
              width: 1200,
              height: 630,
              alt: 'Jeftar Mascarenhas Site E Cursos Blockchain, Front-end e JavaScript'
            }
          ]
        }}
      />
      <DefaultContainer>
        <VStack
          align="stretch"
          pt={{ base: 10 }}
          px={{ base: 4, lg: 16 }}
          spacing="10"
        >
          <MaxContent>
            <HeaderCourses subtitles={subtitles} />
            <Advantages />
          </MaxContent>
          <ListCourses courses={page?.courses} />
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
