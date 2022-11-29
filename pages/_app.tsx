import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SearchProvider } from '@/contexts/SearchContext'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SearchProvider>
        <Head>
          <title>Jethro Cabaluna</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />

          <meta name="title" content="Jethro Cabaluna" />
          <meta name="description" content="Just another software engineer" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.jethrocabaluna.com/" />
          <meta property="og:title" content="Jethro Cabaluna" />
          <meta property="og:description" content="Just another software engineer" />
          <meta property="og:image" content="/me.jpeg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.jethrocabaluna.com/" />
          <meta property="twitter:title" content="Jethro Cabaluna" />
          <meta property="twitter:description" content="Just another software engineer" />
          <meta property="twitter:image" content="/me.jpeg" />
        </Head>
        <Component {...pageProps} />
      </SearchProvider>
      <Analytics />
    </>
  )
}

export default App
