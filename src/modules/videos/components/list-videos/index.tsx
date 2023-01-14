import { SimpleGrid } from '@chakra-ui/react'
import { Videos } from '@global-entities/vidoes'
import VideoItem from '../video-item'

export default function ListVideo({
  channelVideos
}: {
  channelVideos: Videos
}) {
  return (
    <SimpleGrid
      as="section"
      columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      spacing="10"
    >
      {channelVideos?.items &&
        channelVideos.items.length &&
        channelVideos?.items.map((info, index) => (
          <VideoItem key={`${info.id.videoId || index}`} info={info} />
        ))}
    </SimpleGrid>
  )
}
