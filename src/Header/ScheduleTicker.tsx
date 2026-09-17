'use server'

import fs from 'fs/promises'
import path from 'path'
import Papa from 'papaparse'
import ScheduleTickerClient from '@/Header/ScheduleTickerClient'


export async function getSeedGameSchedule(team_id?: string) {

    const getTeamScheduleByString = (team_id?: string) => {

        if (!team_id) {
            return 'ignatius_varsity_gold_schedule_2627.csv'
        }

        if (team_id == '26-27-ignatius-gold') {
            return 'ignatius_varsity_gold_schedule_2627.csv'
        }
        else if (team_id == '26-27-ignatius-maroon') {
            return 'ignatius_varsity_maroon_schedule_2627.csv'
        }
        else if (team_id == '26-27-ignatius-jv') {
            return 'ignatius_junior_varsity_schedule_2627.csv'
        }
        return 'ignatius_varsity_gold_schedule_2627.csv'
    }

    const filePath = path.join(
        process.cwd(),
        'public',
        'data',
        getTeamScheduleByString(team_id)
    )

    const csv = await fs.readFile(filePath, 'utf-8')

    const { data } = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
    })

    return data as any[];
}

export async function getTeamsFile() {

    const filePath = path.join(
        process.cwd(),
        'public',
        'data',
        'teams.csv'
    )

    const csv = await fs.readFile(filePath, 'utf-8')

    const { data } = Papa.parse(csv, {
        header: true,
        skipEmptyLines: true,
    })

    return data as any[];
}


export default async function ScheduleTicker() {

    return (
        <ScheduleTickerClient />
    );
}