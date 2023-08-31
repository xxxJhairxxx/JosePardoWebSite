import { Favicon } from '@/components/globals/Favicon'
import { Layout } from '@/components/layouts/Layout'
import { GeneralsProvider } from '@/context/generals.context'
import { NavbarProvider } from '@/context/navbar.context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return     <>
  <Head>
    <title>Espinoza Space Solution</title>
    <Favicon />
  </Head>
  <GeneralsProvider generals={pageProps.generals}>
    <NavbarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavbarProvider>
  </GeneralsProvider>
</>
}
