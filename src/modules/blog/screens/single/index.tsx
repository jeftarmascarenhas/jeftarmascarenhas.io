import { VStack, Heading, Text, HStack, Container } from '@chakra-ui/react'
import Prism from 'prismjs'
import { Post } from '@global-entities/post'
import { Article } from './styles'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { PUBLIC_ROUTES } from '@configs/routes'

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

export default function Single({ post }: { post: Post }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <NextSeo
        title={`${post.frontmatter.title} | Jeftar Mascarenhas`}
        description={post.frontmatter.description}
        openGraph={{
          url: `https://jeftar.com.br/blog/${post.slug}`,
          title: `${post.frontmatter.title} - Jeftar Mascarenhas`,
          description: post.frontmatter.description,
          type: 'article',
          images: [
            {
              url: `https://jeftar.com.br/api/og?title=${encodeURIComponent(
                post.frontmatter.title
              )}&slug=${encodeURIComponent(post.slug)}.png`,
              alt: post.frontmatter.title,
              width: 1200,
              height: 630
            }
          ],
          article: {
            authors: ['https://twitter.com/jeftar'],
            tags: post.frontmatter.tags
          }
        }}
      />
      <Container maxWidth="4xl">
        <VStack
          align="stretch"
          as="section"
          pt={{ base: 10 }}
          px={{ base: 4, lg: 16 }}
          mb="20"
          spacing="10"
        >
          <Link href={PUBLIC_ROUTES.BLOG}>
            <Text as="span">← Voltar</Text>
          </Link>
          <VStack align="stretch">
            <HStack align="stretch" as="header" spacing="2">
              {post.frontmatter?.tags.map(tag => (
                <Text
                  key={tag}
                  fontSize="md"
                  fontWeight="semibold"
                  color="grayText"
                >
                  {tag}
                </Text>
              ))}
            </HStack>
            <Heading as="h1" fontSize="5xl">
              {post.frontmatter.title}
            </Heading>
            <Text as="time" fontSize="md" color="grayText">
              {post.frontmatter.date}
            </Text>
          </VStack>
          <Text fontSize="2xl" color="grayText">
            {post.frontmatter.description}
          </Text>
          <Article dangerouslySetInnerHTML={{ __html: post.content }} />
        </VStack>
      </Container>
    </>
  )
}
