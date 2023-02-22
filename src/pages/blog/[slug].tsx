import fm from 'front-matter'
import { marked } from 'marked'
import { Post } from '@global-entities/post'
import { getAllPosts, getPostBySlug } from '@global-libs/api'
import SinglePost from '@global-modules/blog/screens/single'

export default SinglePost

type Params = { params: { slug: string } }

export async function getStaticPaths() {
  const paths = getAllPosts().map(item => ({
    params: {
      slug: item?.slug
    }
  }))

  if (!paths.length) {
    return {
      notFound: true
    }
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug) as Post
  const parMarkdown = fm(post.content)
  const content = marked(parMarkdown.body)
  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}
