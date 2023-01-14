import { Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { Props } from './types'

export default function CardCourse({
  image,
  info,
  modeType = 'light',
  href = '',
  onClick,
  ...rest
}: Props) {
  const typeColor = modeType === 'light' ? 'gray.600' : 'gray.100'
  const color = modeType === 'light' ? 'blackAlpha.800' : 'whiteAlpha.900'
  const resumeColor = modeType === 'light' ? 'gray.600' : 'whiteAlpha.800'

  return (
    <VStack
      {...rest}
      onClick={onClick}
      align="stretch"
      boxShadow="2xl"
      rounded="lg"
      p="6"
      as="article"
      spacing="4"
      transition="all .8s"
      cursor="pointer"
      _hover={{
        transform: `scale(1.04)`
      }}
    >
      <Link
        href={href}
        onClick={e => {
          if (onClick) e.preventDefault()
        }}
      >
        <VStack align="stretch" spacing="4">
          <VStack align="stretch" spacing="2">
            {info.type && (
              <Text as="h3" fontSize="lg" fontWeight="medium" color={typeColor}>
                {info.type}
              </Text>
            )}
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color={color}
              lineHeight={1.3}
              as="h2"
            >
              {info.title}
            </Text>
            {info.price && (
              <Text fontSize="lg" fontWeight="medium" color={color}>
                {info.price}
              </Text>
            )}
            {info.resume && (
              <Text fontSize="lg" fontWeight="medium" color={resumeColor}>
                {info.resume}
              </Text>
            )}
          </VStack>
          {image}
        </VStack>
      </Link>
    </VStack>
  )
}
