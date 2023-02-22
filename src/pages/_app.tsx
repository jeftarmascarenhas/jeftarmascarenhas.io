import '../styles/prisma.css'
import '@fontsource/inter'
import Head from 'next/head'
import type { LayoutAppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactElement, useEffect } from 'react'
import Default from '@global-layouts/default'
import { pageView } from '@global-libs/gtag'
import { useRouter } from 'next/router'
import Analytics from '@global-components/analytics'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

const getLayoutDefault = (page: ReactElement) => {
  return <Default>{page}</Default>
}

export default function App({ Component, pageProps }: LayoutAppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const getLayout = Component.getLayout ?? getLayoutDefault
  return (
    <>
      <Head>
        <title>Jeff(Jeftar) Mascarenhas</title>
        <link
          rel="shortcut icon"
          href="/assets/img/jeftarmascarenhas-icon.png"
        />
        <link
          rel="apple-touch-icon"
          href="/assets/img/jeftarmascarenhas-icon.png"
        />
        <meta name="theme-color" content="#1ED760" />
        <meta
          name="description"
          content="Site e Blog de dev para dev onde falo sobre Blockchain, Solidity, Ethereum, Smart Contracts, Javascript, React, Node.js, Next.js, além de fazer vídeos para meu canal do Youtube."
        />
      </Head>
      <DefaultSeo {...SEO} />
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
      <Analytics />
    </>
  )
}
