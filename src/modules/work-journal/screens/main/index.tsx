import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { Box, Divider, Text, VStack } from '@chakra-ui/react'

import TitlePage from '@global-components/title-page'
import DefaultContainer from '@global-components/default-container'
import NewsletterSubscribe from '@global-components/newsletter-subscribe'
import JournalList from '@global-modules/work-journal/components/journal-list'

import { Props } from './types'

export default function WorkJournal({ page }: Props) {
  return (
    <>
      <NextSeo
        title={page?.title}
        description="Coisas que estou trabalhando e estudando. Atualizado toda semana."
        openGraph={{
          images: [
            {
              url: 'https://jeftar.com.br/assets/images/covers/generic-cover.png',
              width: 1200,
              height: 630,
              alt: 'Jeftar Mascarenhas Site, Diário de trabalho'
            }
          ]
        }}
      />
      <DefaultContainer>
        <Box maxWidth={1100}>
          <VStack
            mb="20"
            as="section"
            spacing="10"
            align="stretch"
            pt={{ base: 10 }}
            px={{ base: 4, lg: 16 }}
          >
            <Box pb={{ base: 4, sm: 6, md: 10 }}>
              <TitlePage
                title={page?.title}
                subtitles={page?.subtitles}
              />
              <Text
                fontSize="sm"
                fontStyle="italic"
                color="gray.500"
                css={{
                  a: {
                    textDecoration: 'underline'
                  }
                }}
              >
                Meu site é insperado no site do{' '}
                <Link
                  href="https://samselikoff.com/work-journal"
                  target="_blank"
                >
                  Sam Selikoff
                </Link>
              </Text>
            </Box>
            <JournalList workJournals={page?.workJournals} />
          </VStack>
        </Box>
        <Box py={{ base: 10, md: 20 }} px={{ base: 4, lg: 16 }}>
          <Divider borderColor="gray.300" />
          <Box py={6}>
            <NewsletterSubscribe />
          </Box>
          <Divider borderColor="gray.300" />
        </Box>
      </DefaultContainer>
    </>
  )
}
