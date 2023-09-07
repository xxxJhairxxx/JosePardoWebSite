import { Favicon } from '@/components/globals/Favicon'
import { Layout } from '@/components/layouts/Layout'
import { GeneralsProvider } from '@/context/generals.context'
import { NavbarProvider } from '@/context/navbar.context'
import '@/styles/globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return     <>
  <Head>
    <title>IESTP José Pardo</title>
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
