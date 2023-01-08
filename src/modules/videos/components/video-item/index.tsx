import { Image, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Props } from './types'

export default function VideoItem({ info }: Props) {
  return (
    <Link href={info.href}>
      <VStack align="stretch" as="article">
        <Image
          src={info.thumbnail}
          width={340}
          height={230}
          alt=""
          rounded="2xl"
        />
        <Text as="time" fontSize="md" fontWeight="bold" color="gray.600">
          {info.date}
        </Text>
        <Text as="h2" fontSize="lg" fontWeight="bold">
          {info.title}
        </Text>
      </VStack>
    </Link>
  )
}
