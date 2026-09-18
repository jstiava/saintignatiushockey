'use client'

import { Button } from "@/components/ui/button";
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import * as Popover from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { fromZonedTime } from "date-fns-tz";
import { ChevronLeft, ChevronLeftCircle, ChevronRight, ChevronRightCircle } from "lucide-react";
import { useContext, useState } from "react";
import Image from "next/image";
import { AppContext } from "@/components/AppContext";
import OverplannerDate from "@/lib/OverplannerDate";
import { useMediaQuery } from "@/lib/useMediaQuery";
import MobileSchedule from "@/app/(frontend)/schedule/[team_id]/MobileSchedule";


export const TEAMS = [
    {
        label: '26-27 Ignatius Gold',
        shortname: "Ignatius Gold",
        slug: "26-27-ignatius-gold",
        scheduleFile: 'ignatius_varsity_gold_schedule_2627.csv'
    },
    {
        label: '26-27 Ignatius Maroon',
        slug: "26-27-ignatius-maroon",
        shortname: "Ignatius Maroon",
        scheduleFile: 'ignatius_varsity_maroon_schedule_2627.csv'
    },
    {
        label: '26-27 Ignatius JV',
        shortname: "Ignatius JV",
        slug: "26-27-ignatius-jv",
        scheduleFile: 'ignatius_junior_varsity_schedule_2627.csv'
    }]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const SPECIAL_DATES = {
    'THANKSGIVING': new OverplannerDate(new Date("Thursday, November 26, 2026".replace(/^[^,]+,\s*/, '')), 'America/Chicago'),
    'CHRISTMAS': new OverplannerDate(new Date("Friday, December 25, 2026".replace(/^[^,]+,\s*/, '')), 'America/Chicago'),
    'NEW_YEARS_EVE': new OverplannerDate(new Date("Thursday, December 31, 2026".replace(/^[^,]+,\s*/, '')), 'America/Chicago'),
    'START_OF_OGRADY_TOURNEY': new OverplannerDate(new Date("Friday, November 27, 2026".replace(/^[^,]+,\s*/, '')), 'America/Chicago').toMidnight(),
    'END_OF_OGRADY_TOURNEY': new OverplannerDate(new Date("Sunday, November 29, 2026".replace(/^[^,]+,\s*/, '')), 'America/Chicago').to1159()
}

export default function SchedulePage({
    games,
    team_id,
}: {
    games: any[],
    team_id: string
}) {

    const today = new OverplannerDate('now', 'America/Chicago')
    const [selectedDate, setSelectedDate] = useState(today);
    const { teams } = useContext(AppContext)

    const isMediumOrLess = useMediaQuery("(max-width: 1023px)");

    if (isMediumOrLess) {
        return (
            <MobileSchedule {...{
                games,
                team_id
            }}
            />
        )
    }

    return (
        <div className="flex flex-col w-full h-fit gap-6">


            <div className="sticky top-35 flex flex-row justify-between items-start z-10 py-6" style={{
                background: "linear-gradient(to bottom, #ffffff, #ffffff00)"
            }}>
                <div className="flex justify-start items-start flex-col gap-4 w-[50%]">
                    <div className="flex items-start gap-2">

                        <div className="flex items-start w-fit h-fit gap-0 rounded-sm border p-0 overflow-hidden divide-x">
                            <Button {...{
                                variant: "ghost",
                                className: 'border-0! rounded-none h-9! m-0',
                                onClick: e => {
                                    setSelectedDate(prev => {
                                        const endOfMonth = prev.getStartOf('month').add(-1, 'days');
                                        return endOfMonth
                                    })
                                }
                            }}><ChevronLeft /></Button>
                            <Popover.Popover>
                                <Popover.PopoverTrigger className={'border-none h-9! m-0! p-0!'}>
                                    <Button variant={'ghost'} className={'border-0 h-full p-0 m-0 rounded-none px-4 '}>
                                        <span className="font-semibold text-xs">{selectedDate.print("MMM yyyy")}</span>
                                    </Button>
                                </Popover.PopoverTrigger>
                                <Popover.PopoverContent className={"flex flex-col w-[300px] items-center gap-4"}>

                                    <div className="flex w-full items-center justify-between">
                                        <Button {...{
                                            variant: "ghost",
                                            onClick: e => {
                                                setSelectedDate(prev => {
                                                    const endOfMonth = prev.getStartOf('year').add(-1, 'days').getStartOf('year');
                                                    return endOfMonth
                                                })
                                            }
                                        }}><ChevronLeftCircle /></Button>
                                        <span className="font-semibold text-xs">{selectedDate.print("yyyy")}</span>
                                        <Button {...{
                                            variant: "ghost",
                                            onClick: e => {
                                                setSelectedDate(prev => {
                                                    const endOfMonth = prev.getStartOf('year').add(400, 'days').getStartOf('year');
                                                    return endOfMonth
                                                })
                                            }
                                        }}><ChevronRightCircle /></Button>
                                    </div>

                                    <div className="flex flex-row flex-wrap w-full gap-2 h-fit">

                                        {MONTHS.map((month, index) => {

                                            return (
                                                <Button variant={'outline'} key={month} value={month} className="font-semibold text-xs flex w-[calc(calc(100%/3)-0.35rem)]" >{month}</Button>

                                            )
                                        })}
                                    </div>
                                </Popover.PopoverContent>
                            </Popover.Popover>
                            <Button {...{
                                variant: "ghost",
                                className: 'border-0! rounded-none h-9! m-0',
                                onClick: e => {
                                    setSelectedDate(prev => {
                                        const endOfMonth = prev.getEndOf('month').add(1, 'days');
                                        return endOfMonth
                                    })
                                }
                            }}><ChevronRight /></Button>
                        </div>
                        <div className="flex w-fit h-fit border rounded-sm overflow-hidden">
                            <Button {...{
                                variant: "outline",
                                className: 'h-9! font-semibold rounded-none text-xs px-4 border-0',
                                onClick: e => {
                                    setSelectedDate(today)
                                }
                            }}

                            >Today</Button>
                        </div>
                    </div>

                    <h2 className="text-3xl font-black text-black tracking-tight 
                    [text-shadow:
                    -2px_-2px_0_white,
                    0_-2px_0_white,
                    2px_-2px_0_white,
                    -2px_0_0_white,
                    2px_0_0_white,
                    -2px_2px_0_white,
                    0_2px_0_white,
                    2px_2px_0_white]
                    ">{selectedDate.print("MMMM yyyy")}</h2>
                </div>
                <div className="flex gap-4 items-center ">



                    <div className="flex gap-2 items-center">
                        <span className="text-xs">Teams</span>
                        <div className="flex items-start w-fit h-fit gap-0 rounded-sm border p-0 overflow-hidden divide-x">


                            <Popover.Popover>
                                <Popover.PopoverTrigger className={'border-none h-9! m-0! p-0!'}>
                                    <Button variant={'ghost'} className={'border-0 h-full p-0 m-0 rounded-none px-4 gap-2 '}>
                                        <Image alt="Ignatius logo" width={24} height={24} src="/media/teams/ignatius-1.png" className="size-3" />
                                        <span className="font-semibold text-xs">{TEAMS.find(x => x.slug === team_id)?.label}</span>
                                    </Button>
                                </Popover.PopoverTrigger>
                                <Popover.PopoverContent className={"flex flex-col w-[250px] items-center gap-4"}>

                                    <div className="flex flex-col flex-wrap w-full gap-2 h-fit">

                                        {TEAMS.map((team, index) => {

                                            return (
                                                <Button variant={'outline'} key={team.slug} value={team.slug} className="font-semibold text-xs flex w-full" >
                                                    <a href={`/schedule/${team.slug}`}>{team.label}</a>
                                                </Button>

                                            )
                                        })}
                                    </div>
                                </Popover.PopoverContent>
                            </Popover.Popover>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap w-full gap-3 p-2 border rounded-md">
                {OverplannerDate.getAllDatesInTheMonthOfTargetWithOverflow(selectedDate).map(date => {

                    const isNotInMonth = !date.isSameLocalMonth(selectedDate);
                    const isToday = today.isSameLocalDate(date);
                    const isEvenDate = Number(date.print("d")) % 2 == 0;

                    const gamesOnDate = games.filter(g => {
                        const rawDate = fromZonedTime(new Date(`${g.date.replace(/^[^,]+,\s*/, '')} ${g.time}`), 'America/Chicago')
                        const gameDate = new OverplannerDate(rawDate, 'America/Chicago');
                        return gameDate.isSameLocalDate(date);
                    });

                    if (date.isSameLocalDate(SPECIAL_DATES['NEW_YEARS_EVE'])) {
                        return (

                            <div
                                key={date.print("yyyy-MM-dd")}
                                className="flex flex-col w-[calc(calc(100%/7)-0.65rem)] aspect-square gap-2">
                                <ButtonPrimitive {...{
                                    className: 'bg-white text-black border flex items-center justify-start w-full h-6 rounded-sm border px-2 p-[1px] gap-1'
                                }}>
                                    <span className="text-[0.65rem] w-fit max-w-full truncate-2 uppercase font-bold leading-tight text-left">New Year's Eve</span>
                                </ButtonPrimitive>
                                <ButtonPrimitive {...{
                                    className: cn(
                                        'flex-1 t min-h-0 w-full rounded-sm  text-border p-1 py-1 bg-border',
                                        isToday ? "border border-2 border-dark-maroon" : "border border-2"
                                    )
                                }}>
                                    <div className="flex kustify-start items-start w-full h-full">

                                        <div className={cn(
                                            "flex size-5 justify-center items-center rounded-full bg-transparent text-white",
                                            isToday && "bg-dark-maroon"
                                        )}>

                                            <span className="text-[0.65rem] font-black text-[#9d9d9d] tracking-tight ">{date.print("d")}</span>

                                        </div>
                                    </div>
                                </ButtonPrimitive>
                            </div>
                        )
                    }

                    if (date.isSameLocalDate(SPECIAL_DATES['THANKSGIVING'])) {
                        return (

                            <div
                                key={date.print("yyyy-MM-dd")}
                                className="flex flex-col w-[calc(calc(100%/7)-0.65rem)] aspect-square gap-2">
                                <ButtonPrimitive {...{
                                    className: 'bg-white text-black border flex items-center justify-start w-full h-6 rounded-sm border px-2 p-[1px] gap-1'
                                }}>
                                    <span className="text-[0.65rem] w-fit max-w-full truncate-2 uppercase font-bold leading-tight text-left">Thanksgiving Day</span>
                                </ButtonPrimitive>
                                <ButtonPrimitive {...{
                                    className: cn(
                                        'flex-1 t min-h-0 w-full rounded-sm  text-border p-1 py-1 bg-border',
                                        isToday ? "border border-2 border-dark-maroon" : "border border-2"
                                    )
                                }}>
                                    <div className="flex kustify-start items-start w-full h-full">

                                        <div className={cn(
                                            "flex size-5 justify-center items-center rounded-full bg-transparent text-white",
                                            isToday && "bg-dark-maroon"
                                        )}>

                                            <span className="text-[0.65rem] font-black text-[#9d9d9d] tracking-tight ">{date.print("d")}</span>

                                        </div>
                                    </div>
                                </ButtonPrimitive>
                            </div>
                        )
                    }

                    if (date.isSameLocalDate(SPECIAL_DATES['CHRISTMAS'])) {
                        return (

                            <div
                                key={date.print("yyyy-MM-dd")}
                                className="flex flex-col w-[calc(calc(100%/7)-0.65rem)] aspect-square gap-2">
                                <ButtonPrimitive {...{
                                    className: 'bg-white text-black border flex items-center justify-start w-full h-6 rounded-sm border px-2 p-[1px] gap-1'
                                }}>
                                    <span className="text-[0.65rem] w-fit max-w-full truncate-2 uppercase font-bold leading-tight text-left">Christmas Day</span>
                                </ButtonPrimitive>
                                <ButtonPrimitive {...{
                                    className: cn(
                                        'flex-1 t min-h-0 w-full rounded-sm  text-border p-1 py-1 bg-border',
                                        isToday ? "border border-2 border-dark-maroon" : "border border-2"
                                    )
                                }}>
                                    <div className="flex kustify-start items-start w-full h-full">

                                        <div className={cn(
                                            "flex size-5 justify-center items-center rounded-full bg-transparent text-white",
                                            isToday && "bg-dark-maroon"
                                        )}>

                                            <span className="text-[0.65rem] font-black text-[#9d9d9d] tracking-tight ">{date.print("d")}</span>

                                        </div>
                                    </div>
                                </ButtonPrimitive>
                            </div>
                        )
                    }

                    if ((date.isSameLocalDate(SPECIAL_DATES['START_OF_OGRADY_TOURNEY']) || date.isAfter(SPECIAL_DATES['START_OF_OGRADY_TOURNEY'])) && date.isBefore(SPECIAL_DATES['END_OF_OGRADY_TOURNEY'])) {
                        return (

                            <div
                                key={date.print("yyyy-MM-dd")}
                                className="flex flex-col w-[calc(calc(100%/7)-0.65rem)] aspect-square gap-2">
                                <ButtonPrimitive {...{
                                    className: 'bg-black border-0 text-white flex items-center justify-start w-full h-10 rounded-sm border px-2 p-[1px] gap-1'
                                }}>
                                    <div className="bg-contain bg-no-repeat bg-center size-6 rounded-full" style={{
                                        backgroundImage: `url("/media/ogrady-loyola-tourney-1.png")`
                                    }} />
                                    <span className="text-[0.65rem] w-fit max-w-full truncate-2 uppercase font-bold leading-tight text-left">Loyola O'Grady Thx-giving Tourney</span>
                                </ButtonPrimitive>
                                <ButtonPrimitive {...{
                                    className: cn(
                                        'flex-1 t min-h-0 w-full rounded-sm  text-border p-1 py-1 bg-border',
                                        isToday ? "border border-2 border-dark-maroon" : "border border-2"
                                    )
                                }}>
                                    <div className="flex kustify-start items-start w-full h-full">

                                        <div className={cn(
                                            "flex size-5 justify-center items-center rounded-full bg-transparent text-white",
                                            isToday && "bg-dark-maroon"
                                        )}>

                                            <span className="text-[0.65rem] font-black text-[#9d9d9d] tracking-tight ">{date.print("d")}</span>

                                        </div>
                                    </div>
                                </ButtonPrimitive>
                            </div>
                        )
                    }

                    if (gamesOnDate.length == 0) {
                        return (
                            <ButtonPrimitive
                                key={date.print("yyyy-MM-dd")}
                                className={cn(
                                    "flex w-[calc(calc(100%/7)-0.65rem)] aspect-square rounded-sm  text-border p-1 py-1 bg-border",
                                    isToday ? "border border-2 border-dark-maroon" : "border border-2"

                                )}>
                                <div className={cn(
                                    "flex size-5 justify-center items-center rounded-full bg-transparent",
                                    isToday ? "bg-dark-maroon text-white" : "text-[#9d9d9d] "
                                )}>
                                    <span className="text-[0.65rem] font-black tracking-tight ">{date.print("d")}</span>

                                </div>
                            </ButtonPrimitive>
                        )
                    }

                    if (gamesOnDate.length == 1) {

                        const theGame = gamesOnDate[0];
                        const isHome = theGame['home'] == 'HOME'

                        const rawDate = fromZonedTime(new Date(`${theGame.date.replace(/^[^,]+,\s*/, '')} ${theGame.time}`), 'America/Chicago')
                        const gameDate = new OverplannerDate(rawDate, 'America/Chicago');

                        const theOpponent = teams.find(t => t.id == theGame.opponent);

                        return (
                            <ButtonPrimitive
                                key={date.print("yyyy-MM-dd")}
                                className={cn(
                                    "relative flex w-[calc(calc(100%/7)-0.65rem)] aspect-square rounded-sm  text-black p-1 py-1  bg-border/50 hover:bg-border/75",
                                    isHome ? "bg-dark-maroon hover:bg-dark-maroon/95 text-white border-dark-maroon" : "bg-white hover:bg-black/5 text-black",
                                    isToday ? "border border-2 border-dark-maroon" : "border border-2"

                                )}>
                                <div className={cn(
                                    "flex size-5 justify-center items-center rounded-full bg-white",
                                    isToday ? "bg-dark-maroon text-white" : "text-inherit bg-inherit"
                                )}>
                                    <span className="text-[0.65rem] font-black tracking-tight ">{date.print("d")}</span>

                                </div>
                                <div className="absolute top-0 left-0 w-full h-full text-[0.65rem] flex flex-col items-center justify-center gap-1">
                                    <div className={cn(
                                        "flex items-center justify-center size-14 rounded-full border border-3",
                                        isHome ? "border-[#ffffff50]" : "border-[#000000]"
                                    )} style={{
                                        backgroundColor: theOpponent ? theOpponent['Primary color'] : 'transparent'
                                    }}>
                                        <div className="flex items-center justify-center size-6 bg-center! bg-contain! bg-no-repeat!" style={{
                                            background: theOpponent ? `url("/media/teams/${theOpponent['Primary logo']}")` : "unset"
                                        }}></div>
                                    </div>
                                    <div className="flex flex-col gap-2 p-2 w-full">
                                        <span className="p-0 leading-none font-bold">{isHome ? "vs" : "at"} {theOpponent ? theOpponent.Team : theGame.opponent}</span>
                                        {isHome ? <div className="flex w-full h-3 bg-contain bg-center bg-no-repeat" style={{
                                            backgroundImage: `url("/media/usg-arena-2.png")`
                                        }} /> : <a href="/" className="p-0 leading-tight truncate underline w-full!">{theGame.location}</a>}
                                        <span className="p-0 leading-none">{gameDate.print('h:mm')} CST</span>
                                    </div>
                                </div>
                            </ButtonPrimitive>
                        )
                    }

                    return (
                        <div
                            key={date.print("yyyy-MM-dd")}
                            className={cn(
                                "flex w-[calc(calc(100%/7)-0.65rem)] aspect-square rounded-sm  text-black p-1 py-1",
                                isToday ? "border border-2 border-dark-maroon" : "border border-2"

                            )}>
                            <div className={cn(
                                "flex size-5 justify-center items-center rounded-full bg-white",
                                isToday && "bg-dark-maroon text-white"
                            )}>
                                <span className="text-[0.65rem] font-black tracking-tight ">{date.print("d")}</span>

                            </div>
                            <div className="absolute top-0 left-0 w-full h-full text-[0.65rem] flex items-center justify-center">
                                <p>Multi-game day</p>
                            </div>
                        </div>
                    )

                })}
            </div>

            <div className="flex w-full items-center justify-between">

                <div className="flex items-start w-fit h-fit gap-0 rounded-sm border p-0 overflow-hidden divide-x">
                    <Button {...{
                        variant: "ghost",
                        className: 'border-0! rounded-none h-9! w-fit px-4 m-0',
                        onClick: e => {
                            setSelectedDate(prev => {
                                const endOfMonth = prev.getStartOf('month').add(-1, 'days');
                                return endOfMonth
                            })
                        }
                    }}><ChevronLeft /><span className="text-xs font-bold">{selectedDate.getStartOf('month').add(-1, 'days').print("MMM yyyy")}</span></Button>
                </div>

                <div className="flex gap-4 items-center py-2">

                    <span className="text-xs font-bold">Legend</span>

                    <div className="flex items-center w-fit gap-2">
                        <div className="size-4 bg-primary rounded-xs" />
                        <span className="text-xs">Home games</span>
                    </div>

                    <div className="flex items-center w-fit gap-2">
                        <div className="size-4 bg-white border rounded-xs" />
                        <span className="text-xs">Away games</span>
                    </div>
                </div>

                <div className="flex items-start w-fit h-fit gap-0 rounded-sm border p-0 overflow-hidden divide-x">
                    <Button {...{
                        variant: "ghost",
                        className: 'border-0! rounded-none h-9! w-fit px-4 m-0',
                        onClick: e => {
                            setSelectedDate(prev => {
                                const endOfMonth = prev.getEndOf('month').add(1, 'days');
                                return endOfMonth
                            })
                        }
                    }}><span className="text-xs font-bold">{selectedDate.getEndOf('month').add(1, 'days').print("MMM yyyy")}</span><ChevronRight /></Button>
                </div>

            </div>
        </div >
    );
}