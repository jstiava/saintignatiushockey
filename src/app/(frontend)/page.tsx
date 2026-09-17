import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import { cn } from '@/lib/utils'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="flex w-full h-fit bg-near-black text-white">
      <div className={cn(
        "flex flex-col w-full max-w-[55rem] p-4 ",
        "md:p-8 gap-8"
      )}>
        <div className="w-full h-fit aspect-[16/9] rounded-sm bg-black"></div>
      </div>
      <div className="hidden md:flex flex-1 min-w-0 h-fit">
        <div className="flex flex-col w-full h-fit p-8 gap-8">


          {/* Keenan Casey memorial */}
          <div className="flex flex-col gap-2 w-full h-fit w-fit bg-near-black overflow-hidden ">
            <div className="flex flex-col  aspect-square gap-4 w-full h-full items-center justify-center bg-dark-maroon  rounded-sm border border-2 bg-cover bg-center" style={{
              backgroundImage: `url("/media/graphics/remembering-keenan-casey.png")`
            }}>
            </div>
            <span className='text-xs w-full'><a href="https://www.birdlegacyfoundation.com/" className='underline text-white'>The Bird Legacy Foundation</a>, established in memory of Ignatius Hockey alumni, Keenan Casey, is committed to honoring his legacy by supporting causes that were close to his heart. </span>
          </div>

          {/* Blackhawks Hockey ice center */}
          <div className="flex flex-col gap-2 w-full h-fit w-fit bg-near-black overflow-hidden ">
            <div className="flex flex-col  aspect-[20/9] gap-4 w-full h-full items-center justify-center bg-dark-maroon  rounded-sm border border-2 bg-contain bg-center" style={{
              backgroundImage: `url("/media/graphics/blackhawks-ice-center.png")`
            }}>
            </div>
            <span className='text-xs w-full'><a href="https://www.blackhawksicecenter.com/" className='underline text-white'>Blackhawks Ice Center, presented by Fifth Third Ice Arena</a>, the official practice facility of the Chicago Blackhawks and home rink of the Saint Ignatius Wolfpack Hockey Club. BIC offers daily rat hockey, stick and puck, and learn to skate programs.</span>
          </div>

          {/* Goodman training */}
          <div className="flex flex-col gap-2 w-full h-fit w-fit bg-near-black overflow-hidden ">
            <div className="flex flex-col  aspect-square gap-4 w-full h-full items-center justify-center bg-dark-maroon  rounded-sm border border-2 bg-cover bg-center" style={{
              backgroundImage: `url("/media/graphics/goodman.png")`
            }}>
            </div>
            <span className='text-xs w-full'>For the past 10 seasons, Saint Ignatius Hockey Club has partnered with Goodman Elite Training for off-ice strength and conditioning services for all players. </span>
          </div>

          <div className="w-full aspect-square  bg-black overflow-hidden "></div>
          <div className="w-full aspect-square  bg-black overflow-hidden "></div>
        </div>
      </div>
    </div>
  )
}
