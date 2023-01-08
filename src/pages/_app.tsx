import '@fontsource/inter'
import type { LayoutAppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactElement } from 'react'
import Default from '@global-layouts/default'

const getLayoutDefault = (page: ReactElement) => {
  return <Default>{page}</Default>
}

export default function App({ Component, pageProps }: LayoutAppProps) {
  const getLayout = Component.getLayout ?? getLayoutDefault
  return (
    <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
  )
}
