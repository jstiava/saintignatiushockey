'use client'

import { AppContext } from "@/components/AppContext";
import OverplannerDate from "@/lib/OverplannerDate";
import { cn } from "@/lib/utils";
import { fromZonedTime } from "date-fns-tz";
import { useContext } from "react";


export default function ScheduleTickerItem({
    game,
    team
}: {
    game: any,
    team: any
}) {

    const { teams } = useContext(AppContext);

    const rawDate = fromZonedTime(new Date(`${game.date.replace(/^[^,]+,\s*/, '')} ${game.time}`), 'America/Chicago')
    const date = new OverplannerDate(rawDate, 'America/Chicago')
    const isHome = game.home == 'HOME';

    const theOpponent = teams.find(x => x.id == game.opponent);
    const theTeam = teams.find(x => x.id == 'ignatius');

    return (
        <div className={cn(
            "relative m-0 border-none rounded-none flex items-start flex-col h-fit p-0 w-[300px] text-xs  ",
            isHome ? "bg-dark-maroon hover:bg-dark-maroon/95 text-white" : "bg-white text-black "
        )}
        >
            {isHome && (
                <div className="flex w-full h-full absolute mix-blend-overlay opacity-50" style={{
                    backgroundImage: `url("/media/black_woven_mesh_pattern.png")`,
                    backgroundSize: '120px 120px',
                }} />
            )}
            <div className="z-2 flex items-start flex-col h-fit gap-2 p-4">
                <span className='text-[0.65rem] uppercase font-black h-4'>{game.label}</span>
                <div className="flex gap-1 items-center">
                    <span className={cn(
                        'px-[6px] py-[3px] bg-[lightgray] text-[0.65rem] rounded-md font-bold',
                        isHome ? "bg-[white] text-black text-[0.65rem]" : "text-black"
                    )}>{date.print("h:mm a")}</span>
                    <span className='text-[0.65rem]'>{date.print("EEE, MMM dd")}</span>
                </div>
                <span className='text-[0.65rem]  h-4 underline'>{game.location}</span>
                <div className="flex items-center gap-2">
                    <div className={cn(
                        "flex size-6 items-center justify-center rounded-full overflow-hidden",
                        isHome ? "border border-white" : ""
                    )} style={{
                        backgroundColor: theOpponent ? theOpponent['Primary color'] : 'transparent'
                    }}>
                        <div className='size-4 bg-center! bg-contain! bg-no-repeat!' style={{
                            background: theOpponent ? `url("/media/teams/${theOpponent['Primary logo']}")` : "unset",

                        }} />
                    </div>
                    <span className='font-bold tracking-tight  opacity-80'>{theOpponent ? theOpponent.Team : game['opponent']}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex size-6 items-center justify-center rounded-full overflow-hidden bg-white">
                        <div className='size-5 bg-white bg-center! bg-contain! bg-no-repeat!' style={{
                            background: theTeam ? `url("/media/teams/${theTeam['Primary logo']}")` : "unset"
                        }} />
                    </div>
                    <span className='font-black tracking-tighter uppercase'>{team.shortname}</span>
                </div>
            </div>
        </div>
    )
}