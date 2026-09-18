'use server'

import MobileSchedule from "@/app/(frontend)/schedule/[team_id]/MobileSchedule";
import { getSeedGameSchedule } from "@/Header/ScheduleTicker";

export default async function ServerMobileSchedule({
    theme = "light"
}: {
    theme?: "dark" | "light"
}) {

    const team_id = '26-27-ignatius-gold'
    const data = await getSeedGameSchedule(team_id);

    return (
        <MobileSchedule
            {...{
                games: data,
                team_id,
                theme
            }}
        />
    )
}