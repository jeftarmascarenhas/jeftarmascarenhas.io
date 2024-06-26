export type Post = {
  slug: string
  date: string
  frontmatter: {
    date: string
    title: string
    tags: string[]
    thumbnail?: string
    description: string
  }
  content: string
}

export type Posts = Post[]

export type RequestPostTags = {
  id: number
  title: string
}

export type RequestThumbnail = {
  data: {
    attributes: {
      url: string
      width: number
      height: number
    }
  }
}

export type RequestPost = {
  id: number
  attributes: {
    date: string
    slug: string
    title: string
    content: string
    description: string
    tags: RequestPostTags[]
    thumbnail: RequestThumbnail
  }
}
