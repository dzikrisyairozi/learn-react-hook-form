import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Service from '../sections/Service'
import Header from '@/components/layout/Header'
import Layout from '@/components/layout/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
            <Head>
              <title>Demo</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=''>
              <Hero/>
              {/* <About/>
              <Service/> */}
            </main>
        </Layout>
    </>
  )
}
