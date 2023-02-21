import { extendTheme, Theme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const light = '#fff'
const dark =
  'linear-gradient(180deg, rgba(0, 0, 0, 0) 43.12%, rgba(0, 0, 0, 0.35) 57.08%), linear-gradient(180deg, rgba(25, 28, 31, 0.52) 40.21%, rgba(25, 28, 31, 0.52) 100%), radial-gradient(100% 197.14% at 100% 15.88%, #111F38 11.4%, #0F1318 33.05%, #0F1318 52%, #1C0731 77.8%)'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  } as Theme['config'],
  styles: {
    global: (props: any) => {
      return {
        body: {
          bg: mode(light, dark)(props),
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          colorScheme: 'dark'
        }
      }
    }
  },
  colors: {
    primary: '#845EC2',
    grayText: '#636363'
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  } as Theme['fonts']
}) as Theme

export default theme
