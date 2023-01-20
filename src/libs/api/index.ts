import matter from 'gray-matter'
import { join } from 'path'
import fs from 'fs'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'

const postDirectory = join(process.cwd(), 'content/posts')

export function getPostBySlug(slug: string) {
  if (!slug) return null

  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return {
    slug: realSlug,
    date: data.date.toString(),
    frontmatter: { ...data, date },
    content
  }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postDirectory)
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((postA: any, postB: any) =>
      new Date(postA.data) > new Date(postB.data) ? -1 : 1
    )

  return posts
}
