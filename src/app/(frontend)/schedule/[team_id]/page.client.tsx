'use client'

import SchedulePage from "@/app/(frontend)/schedule/[team_id]/SchedulePage"
import { AppContext } from "@/components/AppContext"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { useContext } from "react"
import * as Table from '@/components/ui/table'


const LEAGUES = {
    'SHL_VARSITY': ["brother-rice", "glenbrook-north", 'glenbrook-south', 'lake-forest', 'loyola', 'new-trier', 'ignatius', 'saint-viator', 'stevenson', 'york'],
    'CCHL_VARSITY': ['ignatius', 'providence', 'benet', 'notre-dame', 'brother-rice', 'fenwick', 'saint-rita', 'mount-carmel']
}

export default function ClientPage({
    games,
    team_id
}: {
    games: any[],
    team_id: string
}) {

    const { teams } = useContext(AppContext);

    return (
        <div className="flex flex-col w-full h-fit gap-6">
            <SchedulePage games={games} team_id={team_id} />
            <div className="h-6 w-full" />
            <hr />

            <div className="flex flex-col md:flex-row w-full p-6 gap-6">

                {/* SHL Varsity */}
                <div className="flex flex-col w-[350px] gap-4">
                    <h3 className="text-xl font-bold leading-snug">SHL Varsity</h3>
                    <div className="flex flex-col gap-1 border rounded-sm overflow-hidden">
                        {LEAGUES['SHL_VARSITY'].map((slug, index) => {

                            const theTeam = teams.find(x => x.id == slug);

                            if (!theTeam) {
                                return <p key={slug}>Could not find {slug}</p>
                            }

                            return (
                                <ButtonPrimitive className={cn(
                                    "flex w-full gap-3 items-center h-8 px-4",
                                    index % 2 == 0 ? "bg-white" : "bg-muted"
                                )} key={slug}>
                                    <span className="text-[0.65rem] opacity-50 w-4">{index + 1}</span>
                                    <div className="rounded-[8px] bg-gradient-to-b from-white via-zinc-400 to-zinc-700 p-[3px]">
                                        <div className="rounded-[6px] bg-zinc-950 p-0">
                                            <div className="w-9 h-6 bg-border rounded-sm  bg-no-repeat! shadow-sm" style={{
                                                backgroundImage: `url("/media/teams/${theTeam['Primary logo']}")`,
                                                backgroundColor: theTeam ? theTeam['Primary color'] : 'transparent',
                                                backgroundSize: "150%",
                                                backgroundPositionX: "65%",
                                                backgroundPositionY: '20%'
                                            }} />
                                        </div>
                                    </div>
                                    <span className={cn(
                                        "text-xs",
                                        theTeam.id == 'ignatius' && 'font-bold'
                                    )}>{theTeam.Team} <span className="opacity-50">({theTeam.Abbr})</span></span>
                                </ButtonPrimitive>
                            )
                        })}
                    </div>
                </div>

                {/* CCHL Varsity */}
                <div className="flex flex-col w-[350px] gap-4">
                    <h3 className="text-xl font-bold leading-snug">CCHL Varsity</h3>
                    <div className="flex flex-col gap-1 border rounded-sm overflow-hidden">
                        {LEAGUES['CCHL_VARSITY'].map((slug, index) => {

                            const theTeam = teams.find(x => x.id == slug);

                            if (!theTeam) {
                                return <p key={slug}>Could not find {slug}</p>
                            }

                            return (
                                <ButtonPrimitive className={cn(
                                    "flex w-full gap-3 items-center h-8 px-4",
                                    index % 2 == 0 ? "bg-white" : "bg-muted"
                                )} key={slug}>
                                    <span className="text-[0.65rem] opacity-50 w-4">{index + 1}</span>
                                    <div className="rounded-[8px] bg-gradient-to-b from-white via-zinc-400 to-zinc-700 p-[3px]">
                                        <div className="rounded-[6px] bg-zinc-950 p-0">
                                            <div className="w-9 h-6 bg-border rounded-sm  bg-no-repeat! shadow-sm" style={{
                                                backgroundImage: `url("/media/teams/${theTeam['Primary logo']}")`,
                                                backgroundColor: theTeam ? theTeam['Primary color'] : 'transparent',
                                                backgroundSize: "150%",
                                                backgroundPositionX: "65%",
                                                backgroundPositionY: '20%'
                                            }} />
                                        </div>
                                    </div>
                                    <span className={cn(
                                        "text-xs",
                                        theTeam.id == 'ignatius' && 'font-bold'
                                    )}>{theTeam.Team} <span className="opacity-50">({theTeam.Abbr})</span></span>
                                </ButtonPrimitive>
                            )
                        })}
                    </div>
                </div>


            </div>
        </div>
    )
}