export type WeekInfo = {
  id: number
  title: string
  items: {
    id: number
    title: string
    link: string
  }[]
}

export type Props = {
  info: WeekInfo
}
