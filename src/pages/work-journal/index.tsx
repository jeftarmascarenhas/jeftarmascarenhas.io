import { getWorkJournal } from '@global-libs/api'
import WorkJournalScreen from '@global-modules/work-journal/screens/main'

export async function getStaticProps() {
  const yearsData = await getWorkJournal()
  return {
    props: {
      yearsData
    },
    revalidate: 30
  }
}

export default WorkJournalScreen
