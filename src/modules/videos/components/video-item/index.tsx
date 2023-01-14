import { Image, Text, VStack } from '@chakra-ui/react'
import { formatDateJS } from '@global-utils/date'
import Link from 'next/link'
import React from 'react'
import { Props } from './types'

export default function VideoItem({ info }: Props) {
  return (
    <Link
      href={`http://www.youtube.com/watch?v=${info.id.videoId}`}
      target="_blank"
    >
      <VStack align="stretch" as="article">
        <Image
          src={info.snippet.thumbnails.medium.url}
          width={320}
          height={180}
          alt=""
          rounded="2xl"
          objectFit="fill"
        />
        <Text as="time" fontSize="md" fontWeight="bold" color="gray.600">
          {formatDateJS(info.snippet.publishedAt)}
        </Text>
        <Text as="h2" fontSize="lg" fontWeight="bold">
          {info.snippet.title}
        </Text>
      </VStack>
    </Link>
  )
}
