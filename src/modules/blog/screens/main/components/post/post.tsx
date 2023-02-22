import { HStack, Text, VStack, Image, Stack, Heading } from '@chakra-ui/react'
import { PUBLIC_ROUTES } from '@configs/routes'
import { Post } from '@global-entities/post'
import Link from 'next/link'

export default function PostItem({ post }: { post: Post }) {
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing="8"
      as={Link}
      href={`${PUBLIC_ROUTES.BLOG}/${post.slug}`}
    >
      <Image
        src={post.frontmatter?.thumbnail}
        alt={post.frontmatter.title}
        width="full"
        maxWidth={{ base: 'auto', md: 295 }}
        minWidth={{ base: 'auto', md: 295 }}
        height={{ base: 'auto', md: 166 }}
        borderRadius="md"
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/150/1ED760/000000?text=Jeff%20Mascarenhas"
      />
      <VStack spacing="2" align="stretch">
        <HStack>
          {post?.frontmatter.tags.map(tag => (
            <Text
              key={tag}
              color="grayText"
              fontSize="sm"
              fontWeight="semibold"
            >
              {tag}
            </Text>
          ))}
        </HStack>
        <Heading as="h3" fontSize="3xl" fontWeight="semibold">
          {post.frontmatter.title}
        </Heading>
        <Text color="grayText" fontSize="sm" fontWeight="medium">
          {post.frontmatter.date}
        </Text>
      </VStack>
    </Stack>
  )
}
