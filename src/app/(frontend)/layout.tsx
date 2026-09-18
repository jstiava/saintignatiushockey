import React from 'react'
import './styles.css'
import './globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import Footer from '@/Footer/Component'
import Header from '@/Header/Header'
import AppContextProvider from '@/components/AppContext'
import { getTeamsFile } from '@/Header/ScheduleTicker'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getServerSideURL } from '@/utilities/getURL'
import { Geist } from 'next/font/google'


const QBExtraBoldFont = localFont({
  src: [
    {
      path: '../../../public/fonts/qb-one-extra-bold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-qb',
})



const GeistFont = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})


const NHLChicago = localFont({
  src: [
    {
      path: '../../../public/fonts/NHL_Chicago.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-chicago',
})




export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const teams = await getTeamsFile();

  return (
    <AppContextProvider {...{
      teams
    }}>

      <html lang="en" className={`${QBExtraBoldFont.variable} ${NHLChicago.variable} ${GeistFont.variable}`}>
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
        </head>
        <body className='relative flex flex-col w-full h-fit font-sans'>
          <Header />
          <div className="flex flex-col w-full h-fit">
            {/* <div className="flex w-full h-30 bg-primary">

          </div> */}
            <div className="flex justify-center w-full bg-dark-maroon h-fit min-h-screen">

              <main className='flex flex-col h-fit min-h-screen bg-black w-full max-w-[80rem]'>
                {children}
                <Footer />
              </main>


            </div>

          </div>
        </body>
      </html>
    </AppContextProvider>
  )
}



export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],

  },
}