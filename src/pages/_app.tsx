import '@fontsource/inter'
import type { LayoutAppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactElement, useEffect } from 'react'
import Default from '@global-layouts/default'
import * as gtag from '@global-libs/gtag'
import { useRouter } from 'next/router'
import Analytics from '@global-components/analytics'

const getLayoutDefault = (page: ReactElement) => {
  return <Default>{page}</Default>
}

export default function App({ Component, pageProps }: LayoutAppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const getLayout = Component.getLayout ?? getLayoutDefault
  return (
    <>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
      <Analytics />
    </>
  )
}
