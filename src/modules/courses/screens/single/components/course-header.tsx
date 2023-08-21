import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import NewsletterSubscribe from '@global-components/newsletter-subscribe'
import Image from 'next/image'
import React from 'react'

export default function CourseHeader() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} alignItems="center" spacing="8">
        <VStack align="flex-start" spacing="4">
          <Text fontWeight="bold" fontSize={{ base: '3xl', md: '4xl' }}>
            Seja avisado dos melhores cursos e vídeos{' '}
            <Box textColor="#1ED760" as="span">
              Web3
            </Box>
            ,{' '}
            <Box textColor="#3997DB" as="span">
              Blockchain
            </Box>
            ,{' '}
            <Box textColor="#1ED760" as="span">
              Solidity
            </Box>
            ,{' '}
            <Box textColor="#3997DB" as="span">
              Smart contract
            </Box>
            ,{' '}
            <Box textColor="#1ED760" as="span">
              Dapps
            </Box>
            ,{' '}
            <Box textColor="#3997DB" as="span">
              Lives{' '}
            </Box>
            e muito mais.
          </Text>
          <Box width="full">
            <NewsletterSubscribe showTitle={false} />
          </Box>
        </VStack>
        <Box display={{ base: 'none', md: 'block' }}>
          <Image
            src="/assets/images/courses/course-jeff.png"
            width={510}
            height={584}
            alt="Cursos Blockchain por Jeftar Mascarenhas"
          />
        </Box>
      </SimpleGrid>
    </>
  )
}
