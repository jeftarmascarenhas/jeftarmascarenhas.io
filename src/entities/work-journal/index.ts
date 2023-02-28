export type WorkItem = {
  id: number
  title: string
  link: string
}

export type WorkInfo = {
  id: number
  title: string
  items: WorkItem[]
}

export type WorkJournalData = {
  id: number
  title: string
  subtitle: string
  infos: WorkInfo[]
}[]
