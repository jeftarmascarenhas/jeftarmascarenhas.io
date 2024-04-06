import { getWorkJournalPage } from '@global-libs/api'
import WorkJournalScreen from '@global-modules/work-journal/screens/main'

export async function getStaticProps() {
  const page = await getWorkJournalPage()

  return {
    props: {
      page
    },
    revalidate: 30
  }
}

export default WorkJournalScreen
