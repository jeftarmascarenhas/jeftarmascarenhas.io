import { getAllPosts } from '@global-libs/api'
import BlogScreen from '@global-modules/blog/screens/main'
import { generateSitemap } from '@global-libs/api/sitemap'
import { Posts } from '@global-entities/post'

export async function getStaticProps() {
  const posts = await getAllPosts()

  if (process.env.NODE_ENV !== 'development') {
    await generateSitemap(posts as Posts)
  }

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}

export default BlogScreen
