import { Button, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { Props } from './types'

export default function CardCourse({
  image,
  info,
  modeType = 'light',
  href = '',
  bgImg,
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
      justifyContent="space-between"
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
      pos="relative"
      overflow="hidden"
      _after={bgImg && {
        content: `""`,
        bgColor: "rgba(0,0,0,0.2)",
        position: 'absolute',
        width: `100%`,
        height: `100%`,
        top: 0,
        left: 0,
      }}
      bgImg={bgImg}
    >
      <Link
        href={href}
        onClick={e => {
          if (onClick) e.preventDefault()
        }}
      style={{position: 'relative', zIndex: 2}}
      >
        <VStack maxH={500} align="stretch" spacing="4">
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
      <Button as="a" href={href} colorScheme="teal" w="full" textTransform="uppercase">Faça sua inscrição</Button>
    </VStack>
  )
}
