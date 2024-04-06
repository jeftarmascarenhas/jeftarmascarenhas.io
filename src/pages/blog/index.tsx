import { Posts } from '@global-entities/post'
import { getBlogPage } from '@global-libs/api'
import { generateSitemap } from '@global-libs/api/sitemap'

import BlogScreen from '@global-modules/blog/screens/main'

export async function getStaticProps() {
  const blogPage = await getBlogPage()

  if (process.env.NODE_ENV !== 'development') {
    await generateSitemap(blogPage?.posts as Posts)
  }

  return {
    props: {
      posts: blogPage?.posts
    },
    revalidate: 10
  }
}

export default BlogScreen
