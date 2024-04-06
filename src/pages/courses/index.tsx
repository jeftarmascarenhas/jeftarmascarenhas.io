import { getCoursePage } from '@global-libs/api'
import CourseScreen from 'modules/courses/screens/main'

export async function getStaticProps() {
  const coursePage = await getCoursePage()

  return {
    props: {
      page: coursePage
    },
    revalidate: 30
  }
}

export default CourseScreen
