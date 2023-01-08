import { Box } from '@chakra-ui/react'
import Header from '@global-layouts/default/components/header'
import { useForceThemeMode } from '@hooks/use-force-theme-mode'
import { DefaultLayoutProps } from './types'

export default function Default({ children }: DefaultLayoutProps) {
  useForceThemeMode('light')
  return (
    <Box as="main">
      <Header />
      {children}
    </Box>
  )
}
