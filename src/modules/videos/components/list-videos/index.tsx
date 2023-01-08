import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import VideoItem from '../video-item'

const videos = [
  {
    id: 0,
    title: 'Aprenda com quem tem experiência de mercado',
    date: 'Jan, 20, 2022',
    href: '#',
    thumbnail: '/assets/images/boa-viagem.jpeg'
  },
  {
    id: 1,
    title: 'Aprenda com quem tem experiência de mercado',
    date: 'Jan, 20, 2022',
    href: '#',
    thumbnail: '/assets/images/boa-viagem.jpeg'
  },
  {
    id: 2,
    title: 'Aprenda com quem tem experiência de mercado',
    date: 'Jan, 20, 2022',
    href: '#',
    thumbnail: '/assets/images/boa-viagem.jpeg'
  },
  {
    id: 3,
    title: 'Aprenda com quem tem experiência de mercado',
    date: 'Jan, 20, 2022',
    href: '#',
    thumbnail: '/assets/images/boa-viagem.jpeg'
  },
  {
    id: 4,
    title: 'Aprenda com quem tem experiência de mercado',
    date: 'Jan, 20, 2022',
    href: '#',
    thumbnail: '/assets/images/boa-viagem.jpeg'
  },
  {
    id: 6,
    title: 'Aprenda com quem tem experiência de mercado',
    date: 'Jan, 20, 2022',
    href: '#',
    thumbnail: '/assets/images/boa-viagem.jpeg'
  }
]

export default function ListVideo() {
  return (
    <SimpleGrid
      as="section"
      columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
      spacing="10"
    >
      {!!videos.length &&
        videos.map(info => <VideoItem key={info.id} info={info} />)}
    </SimpleGrid>
  )
}
