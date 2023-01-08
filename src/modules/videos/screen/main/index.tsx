import { Box, VStack } from '@chakra-ui/react'
import DefaultContainer from '@global-components/default-container'
import TitlePage from '@global-components/title-page'
import ListVideo from '@global-modules/videos/components/list-videos'

export default function VideosScreen() {
  return (
    <DefaultContainer>
      <VStack
        align="stretch"
        pt={{ base: 10 }}
        px={{ base: 4, lg: 16 }}
        spacing="10"
      >
        <Box pb="10">
          <TitlePage
            title="Vídeos"
            subtitles={['Aprenda grátis com os vídeos no canal NFT Choose.']}
          />
        </Box>
        <ListVideo />
      </VStack>
    </DefaultContainer>
  )
}
