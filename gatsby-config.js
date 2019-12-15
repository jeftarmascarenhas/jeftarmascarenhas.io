const feeds = [
  {
    serialize: ({ query: { site, allMarkdownRemark } }) => {
      return allMarkdownRemark.edges.map(edge => {
        return {
          ...edge.node.frontmatter,
          description: edge.node.excerpt,
          date: edge.node.frontmatter.date,
          url: site.siteMetadata.siteUrl + edge.node.fields.slug,
          guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
          custom_elements: [{ 'content:encoded': edge.node.html }],
        }
      })
    },
    query: `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                date
              }
              excerpt(truncate: true, pruneLength: 500, format: HTML)
            }
          }
        }
      }
    `,
    output: '/feed.xml',
    title: 'Jeftar Mascarenhas - RSS Feed',
  },
]

const plugins = [
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/posts`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Jeftar Mascarenhas`,
      short_name: `jeftar.com.br`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    },
  },
  `gatsby-plugin-svgr`,
  `gatsby-plugin-offline`,
  `gatsby-plugin-resolve-src`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-sitemap`,
  {
    resolve: 'gatsby-plugin-eslint',
    options: {
      test: /\.js$|\.jsx$/,
      exclude: /(node_modules|.cache|public)/,
      stages: ['develop'],
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
  },
  {
    resolve: `gatsby-remark-responsive-iframe`,
    options: {
      wrapperStyle: `margin-bottom: 1.0725rem`,
    },
  },
  {
    resolve: `gatsby-plugin-netlify-cache`,
    options: {
      cachePublic: true,
    },
  },
  {
    resolve: `@raae/gatsby-remark-oembed`,
    options: {
      usePrefix: false,
      providers: {
        include: ['Youtube', 'Twitter', 'Codepen'],
        exclude: ['Reddit', 'Flickr', 'Instagram'],
      },
    },
  },
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      // language JSON resource path
      path: `${__dirname}/src/intl`,
      // supported language
      languages: [`en`, `pt`],
      // language file path
      defaultLanguage: `pt`,
      // option to redirect to `/ko` when connecting `/`
      redirect: true,
    },
  },
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title,
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds,
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
          options: {
            name: 'uploads',
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 960,
            linkImagesToOriginal: false,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'static/assets/img/',
          },
        },
      ],
    },
  },
  `gatsby-plugin-netlify-cms`,
  `gatsby-plugin-netlify`,
  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
]

module.exports = {
  siteMetadata: {
    title: `Jeftar Mascarenhas - Front-end Developer`,
    description: `Eu trabalho como Front-end, Back-end and UI Design`,
    descriptionEn: `I work as Front-end, Back-end and UI Design`,
    siteUrl: 'https://jeftar.com.br/',
    social: {
      twitter: 'jeftar',
      twitterLink: 'htps://twitter.com/jeftar',
      githubLink: 'https://github.com/jeftarmascarenhas',
      linkedinLink: 'https://www.linkedin.com/in/jeftarmascarenhas/',
      codepenLink: 'https://codepen.io/jeftar',
    },
    author: `Jeftar Mascarenhas`,
  },
  plugins,
}
