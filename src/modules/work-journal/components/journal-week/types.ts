import { WeekInfo } from '../week-items/types'

export type Props = {
  week: {
    id: number
    title: string
    subtitle: string
    infos: WeekInfo[]
  }
}
