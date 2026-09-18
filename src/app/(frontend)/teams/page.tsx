"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronLeftCircle, ChevronLeftIcon, ChevronRight, ChevronRightCircle, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils"

const seasons = [
    "2024-25",
    "2025-26",
    "2026-27",
    "2027-28",
    "2028-29",
]

export default function TeamsPage() {
    const [seasonIndex, setSeasonIndex] = useState(
        seasons.indexOf("2026-27")
    )

    const season = seasons[seasonIndex]

    const previousSeason = () => {
        setSeasonIndex((current) => Math.max(0, current - 1))
    }

    const nextSeason = () => {
        setSeasonIndex((current) =>
            Math.min(seasons.length - 1, current + 1)
        )
    }

    return (
        <div className="flex flex-col w-full h-fit bg-white text-black">


            <section className="bg-dark-maroon text-white py-4 pt-8">
                <div className="flex flex-col items-center gap-0 px-12">

                    <h1 className="text-4xl font-qb font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Teams
                    </h1>
                </div>
            </section>

            <div className="flex flex-col w-full h-fit gap-8 p-16 items-center ">


                <div className="flex w-full items-center justify-between border rounded-xs overflow-hidden">
                    <Button {...{
                        variant: "ghost",
                        className: "rounded-none!"
                        // onClick: e => {
                        //     setSelectedDate(prev => {
                        //         const endOfMonth = prev.getStartOf('year').add(-1, 'days').getStartOf('year');
                        //         return endOfMonth
                        //     })
                        // }
                    }}><ChevronLeftIcon /></Button>
                    <span className="font-semibold text-xs">2026-27</span>
                    <Button {...{
                        variant: "ghost",
                        className: "rounded-none!"
                        // onClick: e => {
                        //     setSelectedDate(prev => {
                        //         const endOfMonth = prev.getStartOf('year').add(400, 'days').getStartOf('year');
                        //         return endOfMonth
                        //     })
                        // }
                    }}><ChevronRightIcon /></Button>
                </div>


                <div className={cn(
                    "flex flex-col w-full gap-8",
                    "md:flex-row"
                )}>

                    {/* Ignatius Gold */}
                    <div className="group relative flex min-h-[360px] flex-1 min-w-0 overflow-hidden rounded-sm border border-5 border-rich-gold bg-dark-maroon text-rich-gold px-8">

                        {/* Content */}
                        <div className="relative z-10 flex w-full flex-col justify-center md:p-8">
                            <div className="mb-6">

                                <div className="flex items-center gap-4 h-20">
                                    <Image alt="Saint Ignatius Hockey Club" src={"/media/teams/ignatius-2b.png"} width={150} height={50} className="" />
                                    <h3 className="font-qb text-4xl uppercase leading-none text-rich-gold md:text-5xl">
                                        Gold
                                    </h3>
                                </div>

                                <p className="mt-4 max-w-xl text-sm leading-6 text-white/80">
                                    Saint Ignatius Hockey Club's Premier Team. Competes for the State Championship in the SHL Varsity Division and CCHL Varsity
                                    Division. Season highlights include the annual O'Grady
                                    Loyola Thanksgiving Tournament and this year's trip to
                                    St. Mary's, Michigan.
                                </p>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-4">
                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-white hover:text-rich-gold"
                                >
                                    Roster
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>

                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-white hover:text-rich-gold"
                                >
                                    Schedule
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>

                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-white hover:text-rich-gold"
                                >
                                    Stats
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>

                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-white hover:text-rich-gold"
                                >
                                    Coaches
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Ignatius Maroon */}
                    <div className="group relative flex min-h-[360px] flex-1 min-w-0 overflow-hidden rounded-sm border border-5 border-black bg-maroon text-white px-8">

                        {/* Content */}
                        <div className="relative z-10 flex w-full flex-col justify-center md:p-8">
                            <div className="mb-6">

                                <div className="flex items-center gap-4 h-20">
                                    <Image alt="Saint Ignatius Hockey Club" src={"/media/teams/ignatius-3.png"} width={100} height={100} className="" />
                                    <h3 className="font-qb text-3xl uppercase leading-none text-white md:text-5xl">
                                        Maroon
                                    </h3>
                                </div>

                                <p className="mt-4 max-w-xl text-sm leading-6 text-white/80">
                                    Established in 2022, Ignatius's newest varsity team competes in the SHL's Academic Hockey League. Season highlights include the annual O'Grady
                                    Loyola Thanksgiving Tournament and this year's trip to
                                    St. Mary's, Michigan.
                                </p>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-4">
                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-white "
                                >
                                    Roster
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>

                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-white "
                                >
                                    Schedule
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>

                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-white "
                                >
                                    Stats
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>

                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-white "
                                >
                                    Coaches
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="flex flex-col w-full h-fit gap-4 items-center ">

                    {/* Ignatius JV */}
                    <div className="group relative flex min-h-[360px] w-full overflow-hidden rounded-sm border border-5 border-white bg-[whitesmoke] text-maroon px-8">

                        {/* Content */}
                        <div className="relative z-10 flex w-full flex-col justify-center md:p-8">
                            <div className="mb-6">

                                <div className="flex items-center gap-4">
                                    {/* <Image alt="Saint Ignatius Hockey Club" src={"/media/teams/ignatius-2b.png"} width={150} height={50} className="" /> */}
                                    <h3 className="font-qb text-4xl uppercase leading-none text-black md:text-5xl">
                                        Junior Varsity
                                    </h3>
                                </div>

                                <p className="mt-4 max-w-xl text-sm leading-6 text-black">
                                    Competes in the SHL JV Division and for the DiCristina Cup in the CCHL JV Division. This year, JV will participate in the CCM Invitational at Seven Bridges Ice Arena.
                                </p>
                            </div>

                            {/* Links */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-4">
                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-black hover:text-rich-gold"
                                >
                                    Roster
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>

                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-black hover:text-rich-gold"
                                >
                                    Schedule
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>

                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-black hover:text-rich-gold"
                                >
                                    Stats
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>

                                <Button
                                    variant="link"
                                    className="h-auto px-0 text-sm font-semibold text-black hover:text-rich-gold"
                                >
                                    Coaches
                                    <ChevronRight className="ml-1 size-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* SEPERATOR */}
                <div className="flex w-full h-[1px] bg-border" />

                <div className="flex items-center flex-col gap-4 w-full h-fit p-8 px-16">
                    <h3 className="font-qb text-xl text-near-black">2027 Seniors</h3>
                    <span>This year, our graduating seniors include Jack O'Connor, Liam Brennan, Sean Fitzgerald, Connor McKenna, Aidan Walsh, Patrick Doyle, Ethan Sullivan, Ryan Callahan, Michael Donovan, Brady Keane. We'll celebrate them at Senior Night on the last home game of the year, TBD.</span>
                </div>

                {/* SEPERATOR */}
                <div className="flex w-full h-[1px] bg-border" />
            </div>


        </div>
    )
}