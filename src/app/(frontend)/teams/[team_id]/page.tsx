'use server'

import { getSeedRoster } from "@/app/(frontend)/roster/page"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { draftMode } from "next/headers"
import Image from "next/image"
import * as Table from '@/components/ui/table'
import ServerMobileSchedule from "@/app/(frontend)/schedule/[team_id]/ServerMobileSchedule"


const TEAMS = [
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
    }
]

type Args = {
    params: Promise<{
        team_id?: string
    }>
}

export default async function TeamPage({ params: paramsPromise }: Args) {

    const { team_id } = await paramsPromise;
    const team = TEAMS.find(x => x.slug === team_id);
    const data = await getSeedRoster();

    if (!team_id) {
        return <span>No team id.</span>;
    }

    return (
        <div className="flex w-full">
            <div className="flex flex-1 min-w-0">
                <div className="flex w-full flex-col h-fit p-8 bg-white text-black gap-4">

                    <div className="flex items-start gap-6 h-20 h-fit">
                        <Image alt="Saint Ignatius Hockey Club" src={"/media/teams/ignatius-1.png"} width={50} height={50} className="" />
                        <div className="flex flex-col gap-1 text-xs ">
                            <span className="font-qb">{team?.label}</span>
                            <span>Saint Ignatius Hockey Club</span>
                            <span><strong>Coach:</strong> Spence Montgomery</span>
                            <span><strong>Captains:</strong> Captain 1, Captain 2, Alternate Captain Home, Alternate Captain Away </span>
                            <span><strong>Arena:</strong> Blackhawks Ice Center, 1801 W Jackson Blvd, Chicago, IL 60612</span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button {...{
                            variant: "outline",
                            className: 'rounded-xs'
                        }}>
                            <ChevronLeft />
                            Previous Season
                        </Button>
                        <Button {...{
                            variant: "outline",
                            className: 'rounded-xs'
                        }}>
                            Next Season
                            <ChevronRight />
                        </Button>
                    </div>

                    <Table.Table className='text-sm'>
                        <Table.TableHeader>
                            <Table.TableRow>
                                <Table.TableHead className="w-[64px]">No.</Table.TableHead>
                                <Table.TableHead className='font-bold'>Name</Table.TableHead>
                                <Table.TableHead>Age</Table.TableHead>
                                <Table.TableHead>Ht.</Table.TableHead>
                                <Table.TableHead>Wt.</Table.TableHead>
                            </Table.TableRow>
                        </Table.TableHeader>
                        <Table.TableBody>
                            {data.map(player => {

                                return (
                                    <Table.TableRow key={player.Player} className='h-4! text-xs'>
                                        <Table.TableCell>{player['No.']}</Table.TableCell>
                                        <Table.TableCell className='font-bold'>{player['Player']}</Table.TableCell>
                                        <Table.TableCell>{player['Age']}</Table.TableCell>
                                        <Table.TableCell>{player['Ht']}</Table.TableCell>
                                        <Table.TableCell>{player['Wt']}</Table.TableCell>
                                    </Table.TableRow>
                                )
                            })}
                        </Table.TableBody>
                    </Table.Table>



                </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col w-[25rem] p-8 bg-white text-black gap-4">

                <ServerMobileSchedule theme="light" />

                {/* Goodman training */}
                <div className="flex flex-col gap-2 w-full h-fit w-fit overflow-hidden ">
                    <div className="flex flex-col  aspect-square gap-4 w-full h-full items-center justify-center rounded-sm border border-2 bg-cover bg-center" style={{
                        backgroundImage: `url("/media/graphics/goodman.png")`
                    }}>
                    </div>
                    <span className='text-xs w-full'>For the past 10 seasons, Saint Ignatius Hockey Club has partnered with Goodman Elite Training for off-ice strength and conditioning services for all players. </span>
                </div>
            </div>

        </div>
    );
}