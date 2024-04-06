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

export type WorkSubtitles = {
  id: number
  title: string
}

export type WorkJournals = {
  id: number
  title: string
  subtitle: string
  infos: WorkInfo[]
}

export type WorkJournalData = {
  id?: number
  title: string
  subtitles: WorkSubtitles[]
  workJournals: WorkJournals[]
}

export type RequestWorkJournalInfosItems = {
  id: number
  link: string
  title: string
}

export type RequestWorkJournalInfos = {
  id: number
  title: string
  items: RequestWorkJournalInfosItems[]
}

export type  RequestWorkJournalSubtitles = {
  id: number
  title: string
}

export type RequestWorkJournals = {
  id: number
  attributes: {
    title: string
    subtitle: string
    infos: RequestWorkJournalInfos[]
  }
}

export type RequestWorkJournal = {
  id: number
  title: string
  subtitles: RequestWorkJournalSubtitles[]
  workJournals: {
    data: RequestWorkJournals[]
  }
}
