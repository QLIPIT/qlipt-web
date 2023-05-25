import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <title>Qlipt</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/assets/icon.png" />
      <Component {...pageProps} />
    </Fragment>
  )
}
