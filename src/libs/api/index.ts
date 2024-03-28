import axios from 'axios'
import { join } from 'path'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { API_SITE_URL, API_SITE_TOKEN } from '@configs/api'
import { RequestWorkJournal } from '@global-entities/work-journal'
import {
  RequestPostTags,
  Post,
  Posts,
  RequestPost
} from '@global-entities/post'

const postDirectory = join(process.cwd(), 'content/posts')

const siteApi = axios.create({
  baseURL: `${API_SITE_URL}/api`,
  headers: {
    Authorization: `Bearer ${API_SITE_TOKEN}`
  }
})

export async function getPostBySlug(slug: string): Promise<Post> {
  if (!slug) return {} as Post

  const realSlug = slug.replace(/\.md$/, '')
  const {
    data: { data }
  } = await siteApi.get(
    `/posts?fields=id&fields=title&fields=slug&fields=content&fields=description&fields=date&populate=tags&populate=thumbnail&filters[slug][$eq]=${realSlug}`
  )
  const post = data[0].attributes;

  const date = format(
    new Date(post?.date),
    "dd 'de' MMMM 'de' yyyy",
    {
      locale: pt
    }
  )

  return {
    slug: realSlug,
    date: date.toString(),
    content: post?.content,
    frontmatter: {
      date,
      title: post?.title,
      description: post?.description,
      tags: post?.tags?.map((tag: RequestPostTags) => tag?.title),
      thumbnail: `${API_SITE_URL}${post?.thumbnail?.data?.attributes?.url}`
    }
  }
}

export async function getAllPosts(): Promise<Posts> {
  const {
    data: { data }
  } = await siteApi.get(
    '/posts?fields=id&fields=title&fields=slug&fields=content&fields=description&fields=date&populate=tags&populate=thumbnail'
  )
  return data
    ?.map((item: RequestPost) => ({
      id: item?.id,
      slug: item?.attributes?.slug,
      date: item?.attributes?.date,
      content: item?.attributes?.content,
      frontmatter: {
        title: item?.attributes?.title,
        description: item?.attributes?.description,
        tags: item?.attributes?.tags?.map((tag: RequestPostTags) => tag?.title),
        thumbnail: `${API_SITE_URL}${item?.attributes?.thumbnail?.data?.attributes?.url}`,
        date: format(
          new Date(item?.attributes?.date),
          "dd 'de' MMMM 'de' yyyy",
          {
            locale: pt
          }
        )
      }
    }))
    ?.sort((postA: any, postB: any) =>
      new Date(postA.date) > new Date(postB.date) ? 1 : -1
    )
}

export async function getWorkJournal(): Promise<RequestWorkJournal[]> {
  const { data } = await siteApi.get(
    '/work-journals?fields=id&fields=title&fields=subtitle&populate=infos.items'
  )
  return data?.data
    ?.map((item: RequestWorkJournal) => ({
      title: item?.attributes?.title,
      infos: item?.attributes?.infos,
      subtitle: item?.attributes?.subtitle
    }))
    ?.sort((a: RequestWorkJournal, b: RequestWorkJournal) => {
      if (a.id < b.id) return 1
      if (a.id > b.id) return -1
      return 0
    })
}
