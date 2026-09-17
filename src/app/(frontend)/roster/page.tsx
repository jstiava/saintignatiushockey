'use server'
import fs from 'fs/promises'
import path from 'path'
import Papa from 'papaparse'
import * as Table from '@/components/ui/table'
import { cn } from '@/lib/utils'

export async function getSeedRoster() {

    const filePath = path.join(
        process.cwd(),
        'public',
        'data',
        'seed_roster.csv'
    )

    const csv = await fs.readFile(filePath, 'utf-8')

    const { data } = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
    })

    return data as any[];
}


export default async function RosterPage() {

    const data = await getSeedRoster();

    return (
        <div className="flex w-full h-fit bg-white text-black overflow-hidden">

            <div className={cn(
                "flex flex-col w-full max-w-[55rem] p-4 ",
                "md:p-8 gap-8"
            )}>

                <h1 className='text-3xl! font-bold font-qb leading-tight'>ROSTER</h1>

                <div className="flex flex-col w-full gap-2">
                    <h3 className='text-md! font-bold font-qb'>Forwards</h3>
                    <Table.Table className='text-sm'>
                        {/* <Table.TableCaption>A list of your recent invoices.</Table.TableCaption> */}
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

                                if (!['C', 'LW', 'F', 'RW'].some(x => x == player['Pos'])) {
                                    return null;
                                }

                                return (
                                    <Table.TableRow key={player.Player} className='h-10'>
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

                <div className="flex flex-col w-full gap-2">
                    <h3 className='text-md! font-bold font-qb'>Defense</h3>
                    <Table.Table className='text-sm'>
                        {/* <Table.TableCaption>A list of your recent invoices.</Table.TableCaption> */}
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

                                if (!['D', 'LD', 'RD'].some(x => x == player['Pos'])) {
                                    return null;
                                }

                                return (
                                    <Table.TableRow key={player.Player} className='h-10'>
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

                <div className="flex flex-col w-full gap-2">
                    <h3 className='text-md! font-bold font-qb'>Goalies</h3>
                    <Table.Table className='text-sm'>
                        {/* <Table.TableCaption>A list of your recent invoices.</Table.TableCaption> */}
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

                                if (!['G'].some(x => x == player['Pos'])) {
                                    return null;
                                }

                                return (
                                    <Table.TableRow key={player.Player} className='h-10'>
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

            <div className="hidden md:flex flex-1 min-w-0 h-fit">
                <div className="flex flex-col w-full h-fit p-8 gap-6">
                    <div className="w-full h-fit aspect-square rounded-sm bg-border"></div>
                    <div className="w-full aspect-square rounded-sm bg-border"></div>
                    <div className="w-full aspect-square rounded-sm bg-border"></div>
                    <div className="w-full aspect-square rounded-sm bg-border"></div>
                </div>
            </div>

        </div>
    );
}