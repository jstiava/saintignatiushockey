'use client'

import OverplannerDate from '@/lib/OverplannerDate'
import { CalendarIcon } from 'lucide-react'
import { fromZonedTime } from 'date-fns-tz'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import ScheduleTickerItem from '@/Header/ScheduleTickerItem'
import Image from 'next/image'
import * as Popover from "@/components/ui/popover";
import { useContext, useEffect, useState } from 'react'
import { TEAMS } from '@/app/(frontend)/schedule/[team_id]/SchedulePage'
import Papa from 'papaparse'
import { useRouter } from 'next/navigation'
import { AppContext } from '@/components/AppContext'



export default function ScheduleTickerClient() {

    const router = useRouter();
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [team, setTeam] = useState<any | null>(null);

    const { today } = useContext(AppContext);

    const loadTeam = async (team_id?: string) => {

        let foundTeam = null;

        if (!team_id) {

            const preferredTeam = localStorage.getItem("preferred_ticker_team");

            const teamSlug = preferredTeam ?? "26-27-ignatius-gold";
            foundTeam = TEAMS.find((x) => x.slug === teamSlug);

            if (!foundTeam) {
                foundTeam = TEAMS.find(x => x.slug == '26-27-ignatius-gold')
            };
        }
        else {
            foundTeam = TEAMS.find(x => x.slug == team_id);
        }

        if (!foundTeam) {
            return;
        }

        const res = await fetch(`/data/${foundTeam.scheduleFile}`);
        const csv = await res.text();

        const { data: games } = Papa.parse(csv, {
            header: true,
            skipEmptyLines: true,
        });

        const result = {
            ...foundTeam,
            games,
        }

        console.log(result)

        setTeam(result);
    };

    useEffect(() => {
        loadTeam();
    }, []);

    if (!team) {
        return (
            <div className="flex flex-col w-full h-fit bg-white text-black">
                <div className="flex justify-between items-center w-full h-10 bg-black text-white px-2 py-1">

                </div>
                <div className="flex flex-col w-full h-40 bg-black items-center justify-center text-white">
                    <span className='text-xs'>Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full h-fit bg-white text-black">

            {/* Black header */}
            <div className="flex justify-between items-center w-full h-10 bg-black text-white px-2 py-1">
                <Popover.Popover open={isPopoverOpen} onOpenChange={(open) => {
                    setIsPopoverOpen(open)
                }}>
                    <Popover.PopoverTrigger className={'border-none h-9! m-0! p-0! bg-none!'} onClick={e => {
                        setIsPopoverOpen(true)
                    }}>
                        <Button variant={'ghost'} className={'border-0 h-full p-0 m-0 rounded-none px-4 gap-2 bg-transparent! text-white! '}>
                            <Image alt="Ignatius logo" width={24} height={24} src="/media/teams/ignatius-1.png" className="size-3" />
                            <span className="font-semibold text-xs">{team.label}</span>
                        </Button>
                    </Popover.PopoverTrigger>
                    <Popover.PopoverContent className={"flex flex-col w-[250px] items-center gap-4"}>

                        <div className="flex flex-col flex-wrap w-full gap-2 h-fit">

                            {TEAMS.map((team, index) => {
                                return (
                                    <Button key={team.slug} {...{
                                        variant: "outline",
                                        className: "font-semibold text-xs flex w-full",
                                        onClick: e => {
                                            loadTeam(team.slug);
                                            setIsPopoverOpen(false);
                                        }
                                    }}>{team.label}</Button>
                                )
                            })}
                        </div>
                    </Popover.PopoverContent>
                </Popover.Popover>
                <Button {...{
                    variant: "link",
                    className: 'text-white text-xs',
                    onClick: e => {
                        router.push(`/admin/login`)
                    }
                }}>Admin</Button>
            </div>

            {/* Ticker */}
            <div className="relative flex w-full h-40 bg-white overflow-hidden">
                <ScrollArea className="flex w-[calc(100%-5rem)] items-center h-full overflow-x-auto overflow-y-hidden overscroll-x-contain">
                    <div className="flex justify-start w-fit h-full  pl-50">
                        {team.games.map((game: any, index: number) => {

                            const rawDate = fromZonedTime(new Date(`${game.date.replace(/^[^,]+,\s*/, '')} ${game.time}`), 'America/Chicago')
                            const date = new OverplannerDate(rawDate, 'America/Chicago');

                            if (date.isBefore(today.toMidnight())) {
                                return null;
                            }

                            try {


                                return (
                                    <ScheduleTickerItem
                                        key={`${game.opponent}_${date.print("yyyy-MM-dd")}_${index}`}
                                        {...{
                                            game,
                                            team
                                        }}
                                    />
                                )
                            }
                            catch (err) {
                                return (
                                    <div className="flex w-[200px] bg-black h-40">
                                        <span className='text-xs text-[red] w-full'>{JSON.stringify(game, null, 2)}</span>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </ScrollArea>
                <div className="absolute right-0 top-0 flex flex-col items-center justify-center w-[5rem] h-full bg-black hover:bg-black/90 text-white shadow-[-4px_4px_6px_rgba(0,0,0,0.15)]   p-2 text-xs gap-1">
                    <CalendarIcon className='size-4' />
                    <span className='text-center font-semibold'>See Full Schedule</span>
                </div>
            </div>
        </div >
    );
}