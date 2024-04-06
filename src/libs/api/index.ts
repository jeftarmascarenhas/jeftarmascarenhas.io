import axios from 'axios'
import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { API_SITE_URL, API_SITE_TOKEN } from '@configs/api'
import {
  WorkJournalData,
  RequestWorkJournal
} from '@global-entities/work-journal'
import { Post, RequestPostTags } from '@global-entities/post'
import { Blog, RquestBlog } from '@global-entities/blog'
import { Course, CourseData, RequestCourse } from '@global-entities/course'

const siteApi = axios.create({
  baseURL: `${API_SITE_URL}/api`,
  headers: {
    Authorization: `Bearer ${API_SITE_TOKEN}`
  }
})

export async function getCoursePage(): Promise<CourseData> {
  const {
    data: { data }
  } = await siteApi.get(
    '/course-page?fields=title&fields=description&populate=subtitles&populate=courses.thumbnail'
  )
  const coursePage = data?.attributes as RequestCourse

  return {
    title: coursePage?.title,
    description: coursePage?.description,
    courses: coursePage?.courses?.data?.map(course => ({
      ...course?.attributes,
      id: course.id,
      thumbnail: `${API_SITE_URL}${course?.attributes?.thumbnail?.data?.attributes?.url}`,
      date: format(
        new Date(course?.attributes?.date),
        "'Lançamento -' MMMM 'de' yyyy",
        {
          locale: pt
        }
      )
    })),
    subtitles: coursePage?.subtitles?.map(subtitle => subtitle?.title)
  }
}

export async function getCourseBySlug(slug: string): Promise<Course> {
  if (!slug) return {} as Course

  const realSlug = slug.replace(/\.md$/, '')
  const {
    data: { data }
  } = await siteApi.get(
    `/courses?fields=id&fields=title&fields=slug&fields=description&fields=date&populate=thumbnail&filters[slug][$eq]=${realSlug}`
  )
  const course = data[0].attributes

  const date = format(new Date(course?.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return {
    id: course?.id,
    date: date?.toString(),
    slug: course?.attributes?.slug,
    title: course?.attributes?.title,
    description: course?.attributes?.description,
    thumbnail: `${API_SITE_URL}${course?.attributes?.thumbnail?.data?.attributes?.url}`
  }
}

export async function getBlogPage(): Promise<Blog> {
  const { data } = await siteApi.get(
    '/blog-page?populate=posts.tags&populate=posts.image&populate=posts.thumbnail'
  )
  const blog = data?.data?.attributes as RquestBlog
  return {
    id: 1,
    posts: blog?.posts?.data?.map(post => ({
      ...post?.attributes,
      frontmatter: {
        ...post?.attributes,
        tags: post?.attributes?.tags?.map(tag => tag?.title),
        thumbnail: `${API_SITE_URL}${post?.attributes?.thumbnail?.data?.attributes?.url}`,
        date: format(
          new Date(post?.attributes?.date),
          "dd 'de' MMMM 'de' yyyy",
          {
            locale: pt
          }
        )
      }
    }))
  }
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (!slug) return {} as Post

  const realSlug = slug.replace(/\.md$/, '')
  const {
    data: { data }
  } = await siteApi.get(
    `/posts?fields=id&fields=title&fields=slug&fields=content&fields=description&fields=date&populate=tags&populate=thumbnail&filters[slug][$eq]=${realSlug}`
  )
  const post = data[0].attributes

  const date = format(new Date(post?.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return {
    slug: realSlug,
    date: date.toString(),
    content: post?.content,
    frontmatter: {
      ...post,
      date,
      tags: post?.tags?.map((tag: RequestPostTags) => tag?.title),
      thumbnail: `${API_SITE_URL}${post?.thumbnail?.data?.attributes?.url}`
    }
  }
}

export async function getWorkJournalPage(): Promise<WorkJournalData> {
  const { data } = await siteApi.get(
    '/work-journal-page?fields=id&fields=title&populate=workJournals.infos.items&populate=subtitles'
  )
  const workPage = data?.data?.attributes as RequestWorkJournal
  return {
    ...workPage,
    workJournals: workPage?.workJournals?.data
      ?.map(work => ({
        ...work?.attributes,
        id: work?.id
      }))
      ?.sort((a, b) => {
        if (a.id < b.id) return 1
        if (a.id > b.id) return -1
        return 0
      })
  }
}
