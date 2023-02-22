import { getAllPosts } from '@global-libs/api'
import BlogScreen from '@global-modules/blog/screens/main'

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: {
      posts
    }
  }
}

export default BlogScreen