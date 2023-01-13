import { HStack, Box, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Props } from './types'

export default function WeekItems({ info }: Props) {
  return (
    <VStack align="stretch" spacing="6" mb="6">
      <Text fontSize="3xl" fontWeight="bold" as="h4">
        {info.title}
      </Text>
      <VStack pl="8" align="stretch" as="ul" spacing="6" listStyleType="none">
        {info?.items.length &&
          info.items.map(item => (
            <HStack
              key={item.id}
              as="li"
              _before={{
                content: '""',
                width: 2,
                height: 2,
                padding: 1,
                backgroundColor: 'teal',
                display: 'flex',
                rounded: 'full',
                mr: '2'
              }}
            >
              <Box
                _last={{
                  a: {
                    color: 'blue.600',
                    fontWeight: 'medium'
                  }
                }}
              >
                {item.title}
                <Link href={item.link} target="_blank">
                  {' '}
                  Link
                </Link>
              </Box>
            </HStack>
          ))}
      </VStack>
    </VStack>
  )
}
