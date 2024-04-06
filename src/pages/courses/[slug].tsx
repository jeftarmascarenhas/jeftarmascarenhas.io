import { getCourseBySlug, getCoursePage } from '@global-libs/api'
export { default } from '@global-modules/courses/screens/single'

type Params = { params: { slug: string } }

export async function getStaticPaths() {
  const coursePage = await getCoursePage()
  const paths = coursePage?.courses?.map(item => ({
    params: {
      slug: item?.slug
    }
  }))

  if (!paths.length) {
    return {
      notFound: true
    }
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }: Params) {
  const course = await getCourseBySlug(params.slug)
  return {
    props: {
      post: {
        ...course
      }
    },
    revalidate: 10
  }
}
