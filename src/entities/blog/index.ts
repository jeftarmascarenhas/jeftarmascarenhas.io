import { Posts, RequestPost } from '@global-entities/post'

export type Blog = {
  id: number
  posts: Posts
}

export type RquestBlog = {
  id: number
  posts: {
    data: RequestPost[]
  }
}
