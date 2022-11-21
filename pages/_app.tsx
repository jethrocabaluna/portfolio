import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SearchProvider } from '@/contexts/SearchContext'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SearchProvider>
        <Head>
          <title>Jethro Cabaluna</title>
        </Head>
        <Component {...pageProps} />
      </SearchProvider>
    </>
  )
}

export default App
