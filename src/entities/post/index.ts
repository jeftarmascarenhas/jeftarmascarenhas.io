export type Post = {
  slug: string
  date: string
  frontmatter: {
    date: string
    title: string
    thumbnail?: string
    description: string
    tags: string[]
  }
  content: string
}

export type Posts = Post[]
