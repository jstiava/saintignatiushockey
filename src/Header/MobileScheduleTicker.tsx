'use server'

import fs from 'fs/promises'
import path from 'path'
import Papa from 'papaparse'
import OverplannerDate from '@/lib/OverplannerDate'
import { CalendarIcon, ChevronDown } from 'lucide-react'
import { fromZonedTime } from 'date-fns-tz'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

export default async function MobileScheduleTicker() {

    const filePath = path.join(
        process.cwd(),
        'public',
        'data',
        'ignatius_varsity_gold_schedule_2627.csv'
    )

    const csv = await fs.readFile(filePath, 'utf-8')

    const { data } = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
    })

    return (
        <div className="flex flex-col w-full h-fit bg-white text-black">
            <div className="flex items-center w-full h-10 bg-black text-white px-2 py-1">
                <Button variant={'ghost'} className={'bg-transparent hover:bg-white/10 text-white hover:text-white'}><span className='text-xs '>Ignatius Gold</span> <ChevronDown /></Button>
            </div>
            <div className="relative flex w-full h-fit bg-white overflow-hidden">
                <div className="flex justify-start w-fit h-full">
                    {data.map((game: any, index: number) => {

                        if (index != 0) {
                            return null;
                        }

                        const rawDate = fromZonedTime(new Date(`${game.date.replace(/^[^,]+,\s*/, '')} ${game.time}`), 'America/Chicago')
                        const date = new OverplannerDate(rawDate, 'America/Chicago')
                        const isHome = game.home == 'HOME';

                        if (isHome) {

                            return (
                                <Button key={`${game.opponent}_${date.print("yyyy-MM-dd")}_${index}`} className="m-0 border-none rounded-none flex items-start flex-col h-fit p-0 w-[250px] bg-dark-maroon hover:bg-dark-maroon/95 text-white text-xs gap-2 p-4 cursor-pointer ">
                                    <span className='text-[0.65rem] uppercase font-black h-4'>{game.label}</span>
                                    <div className="flex gap-2 items-center">
                                        <span className='px-[6px] py-[3px] bg-[white] text-[0.65rem] text-black rounded-md font-bold'>{date.print("h:mm a")} CST</span>
                                        <span className='text-[0.65rem]'>{date.print("EEE, MMM dd")}</span>
                                    </div>
                                    <span className='text-[0.65rem]  h-4 underline'>{game.location}</span>
                                    <div className="flex items-center gap-2">
                                        <div className='size-6 rounded-full bg-[lightgray]' />
                                        <span className='font-bold tracking-tight opacity-80'>{game.opponent}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className='size-6 rounded-full bg-rich-gold' />
                                        <span className='font-black tracking-tighter'>IGNATIUS GOLD</span>
                                    </div>
                                </Button>
                            )
                        }

                        return (
                            <div key={`${game.opponent}_${date.print("yyyy-MM-dd")}_${index}`} className="flex items-start flex-col h-fit p-0 w-[250px] bg-white text-black text-xs gap-2 p-4 ">
                                <span className='text-[0.65rem] uppercase font-black h-4'>{game.label}</span>
                                <div className="flex gap-1 items-center">
                                    <span className='px-[6px] py-[3px] bg-[lightgray] text-[0.65rem] text-black rounded-md font-bold'>{date.print("h:mm a")}</span>
                                    <span className='text-[0.65rem]'>{date.print("EEE, MMM dd")}</span>
                                </div>
                                <span className='text-[0.65rem]  h-4 underline'>{game.location}</span>
                                <div className="flex items-center gap-2">
                                    <div className='size-6 rounded-full bg-[lightgray]' />
                                    <span className='font-bold tracking-tight  opacity-80'>{game.opponent}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className='size-6 rounded-full bg-rich-gold' />
                                    <span className='font-black tracking-tighter'>IGNATIUS GOLD</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    );
}