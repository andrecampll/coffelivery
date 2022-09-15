import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { CartProvider } from '../hooks'

import '../styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return <CartProvider>{getLayout(<Component {...pageProps} />)}</CartProvider>
}

export default App
