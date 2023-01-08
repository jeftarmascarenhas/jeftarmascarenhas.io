import { Alert, Box } from '@chakra-ui/react'
import Header from '@global-layouts/default/components/header'
import { useForceThemeMode } from '@hooks/use-force-theme-mode'
import { DefaultLayoutProps } from './types'

export default function Default({ children }: DefaultLayoutProps) {
  useForceThemeMode('light')
  return (
    <Box as="main" pb="8">
      <Alert status="warning" justifyContent="center" mb="4">
        <span>Este é meu novo site. Está em desenvolvimento.</span>
      </Alert>
      <Header />
      {children}
    </Box>
  )
}
