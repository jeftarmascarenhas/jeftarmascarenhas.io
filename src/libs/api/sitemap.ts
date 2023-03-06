const SITE_URL = 'https://jeftar.com.br/'
import { globby } from 'globby'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'
import fs from 'fs'
import { Posts } from '@global-entities/post'

// pages that should not be in the sitemap
const blocklist = ['/404']

// pages that should not be in the sitemap

export async function generateSitemap(posts: Posts) {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  const baseUrl = SITE_URL
  const pages = await globby([
    'src/pages/**/*{.js}',
    '!src/pages/**/[*',
    '!src/pages/_*.js',
    '!src/pages/api'
  ])

  // normal page routes
  const pageLinks = pages
    .map(page => {
      const path = page
        .replace('pages', '')
        .replace('.js', '')
        .replace('src/', '')
      return path === '/index'
        ? { url: '/', changefreq: 'daily', priority: 0.7 }
        : { url: path, changefreq: 'daily', priority: 0.7 }
    })
    .filter(page => !blocklist.includes(page.url))

  // post routes
  const postLinks = posts.map(post => ({
    url: `/${post.slug}`,
    changefreq: 'daily',
    priority: 0.7
  }))

  const links = [...pageLinks, ...postLinks]
  const stream = new SitemapStream({ hostname: baseUrl })

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    data => data.toString()
  )
  console.log('xml: ', xml)
  fs.writeFileSync('./public/sitemap.xml', xml)
}
