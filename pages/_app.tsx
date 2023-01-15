import '../styles/globals.css'
import { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1536
    }
  }
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}
