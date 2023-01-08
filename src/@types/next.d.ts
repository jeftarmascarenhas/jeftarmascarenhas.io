import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

declare module 'next' {
  export interface LayoutPage extends NextPage {
    getLayout?: (page: ReactElement) => ReactNode
  }
}

declare module 'next/app' {
  export interface LayoutAppProps extends AppProps {
    Component: NextPage & {
      getLayout?: (page: ReactElement) => ReactNode
    }
  }
}
