import { VStack, Heading, Text, HStack, Container } from '@chakra-ui/react'
import Prism from 'prismjs'
import { Post } from '@global-entities/post'
import { Article } from './styles'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'

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
        title="Blog | Jeftar Mascarenhas"
        description="Nesse blog escreve tudo que estou fazendo e interessado como blockchain, web3, desenvolvimento web e mobile."
        openGraph={{
          url: `https://jeftar.com.br/blog/${post.slug}`,
          title: `${post.frontmatter.title} - Jeftar Mascarenhas`,
          description: post.frontmatter.description,
          images: [
            {
              url: `https://jeftar.com.br/api/og?title=${encodeURIComponent(
                post.frontmatter.title
              )}&slug=${encodeURIComponent(post.slug)}.png`,
              alt: post.frontmatter.title
            }
          ]
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
