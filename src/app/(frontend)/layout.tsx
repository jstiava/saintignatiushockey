import React from 'react'
import './styles.css'
import './globals.css'
import localFont from 'next/font/local'
import Footer from '@/Footer/Component'
import Header from '@/Header/Header'
import AppContextProvider from '@/components/AppContext'
import { getTeamsFile } from '@/Header/ScheduleTicker'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

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

      <html lang="en" className={`${QBExtraBoldFont.variable} ${NHLChicago.variable}`}>
        <body className='relative flex flex-col w-full h-fit'>
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
