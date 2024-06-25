import MaxContent from '@global-components/max-content'
import DefaultContainer from '@global-components/default-container'
import { NextSeo } from 'next-seo'
import { Props } from './types'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import PostItem from './components/post/post'
import TitlePage from '@global-components/title-page'
import { WorkSubtitles } from '@global-entities/work-journal'

const subtitles: WorkSubtitles[] = [
  {
    title:
      'Artigos sobre tecnologia, Front-end blockchain, back-end e tudo que acho interessante ou estou estudando.'
  }
]

export default function BlogScreen({ posts }: Props) {
  return (
    <>
      <NextSeo
        title="Blog | Jeftar Mascarenhas"
        description="Nesse blog escreve tudo que estou fazendo e interessado como blockchain, web3, desenvolvimento web e mobile."
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
          align="stretch"
          pt={{ base: 10 }}
          px={{ base: 4, lg: 16 }}
          spacing="10"
        >
          <Box pb={{ base: 4, sm: 6, md: 10 }}>
            <TitlePage
              title="Blog"
              subtitles={subtitles}
            />
          </Box>
          <MaxContent>
            {!!posts.length ? (
              <VStack spacing="12" align="stretch">
                {posts.map(post => (
                  <PostItem post={post} key={post.slug} />
                ))}
              </VStack>
            ) : (
              <HStack py="6">
                <Text fontSize="2xl">Nenhum post encontrado.</Text>
              </HStack>
            )}
          </MaxContent>
        </VStack>
      </DefaultContainer>
    </>
  )
}
