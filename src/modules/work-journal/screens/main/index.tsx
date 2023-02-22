import { Box, VStack } from '@chakra-ui/react'
import DefaultContainer from '@global-components/default-container'
import TitlePage from '@global-components/title-page'
import JournalList from '@global-modules/work-journal/components/journal-list'
import { NextSeo } from 'next-seo'

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
          </Box>
          <JournalList />
        </VStack>
      </DefaultContainer>
    </>
  )
}
