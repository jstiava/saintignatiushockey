'use server'

import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener'


type Args = {
    params: Promise<{
        slug?: string
    }>
}


export default async function PayloadPage({ params: paramsPromise }: Args) {

    const { isEnabled: draft } = await draftMode()
    const { slug = 'home' } = await paramsPromise
    // Decode to support slugs with special characters
    const decodedSlug = decodeURIComponent(slug)
    const url = '/' + decodedSlug

    const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
        slug: decodedSlug,
    })

    if (!page) {
        return <PayloadRedirects url={url} />
    }

    return (
        <>
            <div id="content" className="flex flex-col w-full gap-0 bg-white text-near-black pb-30">
                <PayloadRedirects disableNotFound url={url} />
                {draft && <LivePreviewListener />}

                {/* Page Header  */}

                <div className='w-full h-12 bg-primary' />
                <div className="flex w-full h-fit p-12 py-18 bg-[whitesmoke]">
                    <h3 className='text-3xl font-qb text-near-black w-full text-center'>{page.title}</h3>
                </div>

                <div className="flex flex-col gap-0 w-full h-fit p-6">
                    {page.blocks && <RenderBlocks blocks={page.blocks} />}
                </div>
            </div>
        </>
    )
}


const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
    const { isEnabled: draft } = await draftMode()

    const payload = await getPayload({ config: configPromise })

    const result = await payload.find({
        collection: 'pages',
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
