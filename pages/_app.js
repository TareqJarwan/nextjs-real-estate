import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import { Layout } from '../components';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
