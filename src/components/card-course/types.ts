import { ReactNode } from 'react'
import { StackProps, ColorMode } from '@chakra-ui/react'

type MicroInfo = {
  title: string
  price?: string
  resume?: string
  type?: string
}

export type Props = {
  info: MicroInfo
  image?: ReactNode
  modeType?: ColorMode
  href: string
} & StackProps
