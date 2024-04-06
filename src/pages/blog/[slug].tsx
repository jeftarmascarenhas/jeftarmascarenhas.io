import fm from 'front-matter'
import { marked } from 'marked'
export { default } from '@global-modules/blog/screens/single'
import { getBlogPage, getPostBySlug } from '@global-libs/api'

type Params = { params: { slug: string } }

export async function getStaticPaths() {
  const blogPage = await getBlogPage()
  const paths = blogPage?.posts?.map(item => ({
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
  const post = await getPostBySlug(params.slug)
  const parMarkdown = fm(post.content)
  const content = marked(parMarkdown.body)
  return {
    props: {
      post: {
        ...post,
        content
      }
    },
    revalidate: 10
  }
}
