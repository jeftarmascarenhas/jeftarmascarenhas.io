import { Box, Text, VStack } from '@chakra-ui/react'
import DefaultContainer from '@global-components/default-container'
import TitlePage from '@global-components/title-page'
import JournalList from '@global-modules/work-journal/components/journal-list'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function WorkJournal() {
  return (
    <>
      <NextSeo
        title="Diário de Trabalho | Jeftar Mascarenhas"
        description="Coisas que estou trabalhando e estudando. Atualizado toda semana."
        openGraph={{
          images: [
            {
              url: 'https://jeftar.com.br/assets/images/covers/generic-cover.png',
              alt: 'Jeftar Mascarenhas Blog sobre tecnologia web2, web3, Blockchain e Javascript'
            }
          ]
        }}
      />
      <DefaultContainer>
        <Box maxWidth={1100}>
          <VStack
            as="section"
            align="stretch"
            pt={{ base: 10 }}
            px={{ base: 4, lg: 16 }}
            mb="20"
            spacing="10"
          >
            <Box pb={{ base: 4, sm: 6, md: 10 }}>
              <TitlePage
                title="Diário de trabalho"
                subtitles={[
                  'Coisas que estou trabalhando e estudando. Atualizado toda semana.'
                ]}
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
            <JournalList />
          </VStack>
        </Box>
      </DefaultContainer>
    </>
  )
}
