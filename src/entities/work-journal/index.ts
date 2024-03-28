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

export type RequestWorkJournalInfosItems = {
  id: number
  link: string
  title: string
}

export type RequestWorkJournalInfos = {
  title: string
  items: RequestWorkJournalInfosItems[]
}

export type RequestWorkJournal = {
  id: number
  attributes: {
    title: string
    subtitle: string
    infos: RequestWorkJournalInfos[]
  }
}
