'use server'

import { getPayload, RequiredDataFromCollectionSlug } from "payload";
import configPromise from '@payload-config'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { draftMode } from "next/headers";
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { cache } from "react";
import PageClient from "./page.client";
import { getSeedGameSchedule, getTeamsFile } from "@/Header/ScheduleTicker";
import { cn } from "@/lib/utils";

type Args = {
    params: Promise<{
        team_id?: string
    }>
}





export default async function TeamSchedulePage({ params: paramsPromise }: Args) {

    const { team_id } = await paramsPromise;

    const data = await getSeedGameSchedule(team_id);

    const { isEnabled: draft } = await draftMode()

    // const team: RequiredDataFromCollectionSlug<'teams'> | null = await queryTeamBySlug({
    //     slug: decodedSlug,
    // })

    // if (!team) {
    //     return <PayloadRedirects url={url} />
    // }

    if (!team_id) {
        return <span>No team id.</span>;
    }

    return (
        <>
            <div id="content" className={cn(
                "flex flex-col w-full gap-0 bg-white text-black min-h-screen py-4 px-1",
                "md:px-8"
            )}>
                {/* <p>{JSON.stringify(team, null, 2)}</p> */}
                <PageClient {...{
                    games: data,
                    team_id
                }} />
                {/* <PayloadRedirects disableNotFound url={url} /> */}
                {draft && <LivePreviewListener />}
                {/* {page.blocks && <RenderBlocks blocks={page.blocks} />} */}
            </div>
        </>
    )
}

const queryTeamBySlug = cache(async ({ slug }: { slug: string }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'teams',
        draft,
        limit: 1,
        pagination: false,
        overrideAccess: draft,
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    return result.docs?.[0] || null
})


// export async function generateStaticParams() {
//     const payload = await getPayload({ config: configPromise })
//     const pages = await payload.find({
//         collection: 'teams',
//         draft: false,
//         limit: 1000,
//         overrideAccess: false,
//         pagination: false,
//         select: {
//             slug: true,
//         },
//     })

//     const params = pages.docs
//         ?.filter((doc) => {
//             return doc.slug !== 'home'
//         })
//         .map(({ slug }) => {
//             return { slug }
//         })

//     return params
// }