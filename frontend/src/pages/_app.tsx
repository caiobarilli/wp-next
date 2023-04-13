import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import dark from 'styles/dark'
import GlobalStyle from 'styles/globalstyles'
import { Context, ContextProvider } from 'utils/context'
import { useContext } from 'react'
import { Router } from 'next/router'

interface CustomAppProps extends AppProps {
  router: Router
}

export default function App({ Component, pageProps, router }: CustomAppProps) {
  return (
    <ContextProvider>
      <AppWrapper Component={Component} pageProps={pageProps} router={router} />
    </ContextProvider>
  )
}

function AppWrapper({ Component, pageProps }: AppProps) {
  const { isDarkTheme } = useContext(Context)

  return (
    <ThemeProvider theme={isDarkTheme ? dark : theme}>
      <GlobalStyle />
      <Head>
        <title>Next Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/icons/icon-512.png" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Next Boilerplate" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
