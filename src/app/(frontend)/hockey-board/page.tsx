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


export default async function HockeyBoardPage({ params: paramsPromise }: Args) {


    return (
        <>
            <div id="content" className="flex flex-col w-full gap-0 bg-white text-near-black pb-30">

                {/* Page Header  */}

                <div className='w-full h-12 bg-primary' />
                <div className="flex w-full h-fit p-12 py-18 bg-[whitesmoke]">
                    <h3 className='text-3xl font-qb text-near-black w-full text-center'>Hockey Board</h3>
                </div>

                <div className="flex justify-center w-full h-fit p-6 py-12 flex-wrap gap-8">
                    {HOCKEY_BOARD_MEMBERS.map(member => {

                        return (
                            <div key={member.name} className="flex flex-col gap-2 w-50 h-fit p-2">
                                <div {...{
                                    className: 'flex items-center justify-center w-full aspect-[3/4] bg-[grey] rounded-xs'
                                }}>
                                    <div className='flex bg-contain bg-no-repeat w-20 aspect-[3/4] h-fit bg-center opacity-15 grayscale' style={{
                                        backgroundImage: `url("/media/teams/ignatius-1.png")`
                                    }} />
                                </div>
                                <div className="flex flex-col gap-1 py-4">
                                    <span className='font-qb text-lg leading-tight pr-4'>{member.name}</span>
                                    <span className='font-sans text-sm leading-tight'>{member.position}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* <div className="flex flex-col gap-0 w-full h-fit p-6">
                    {page.blocks && <RenderBlocks blocks={page.blocks} />}
                </div> */}
            </div>
        </>
    )
}

const HOCKEY_BOARD_MEMBERS = [
    {
        "position": "President",
        "name": "TJ Perreault"
    },
    {
        "position": "Vice President",
        "name": "Mike Haynes"
    },
    {
        "position": "Secretary",
        "name": "Nick Ustaski"
    },
    {
        "position": "Treasurer & Registrar",
        "name": "Nancy Temple"
    },
    {
        "position": "Development",
        "name": "Adam Velarde"
    },
    {
        "position": "Rules and Ethics, Chair",
        "name": "Courtney Eber"
    },
    {
        "position": "Hockey Advisor",
        "name": "Matt Ford"
    },
    {
        "position": "Hockey Committee",
        "name": "Pat Doyle"
    },
    {
        "position": "Hockey Committee",
        "name": "Chris Arvanites"
    },
    {
        "position": "Alumni Liaison",
        "name": "Jack Fischer"
    },
    {
        "position": "Hockey Apparel",
        "name": "Kathleen Perreault",
        "category": "At Large Support"
    },
    {
        "position": "Travel / Transportation",
        "name": "Shawna Ryan",
        "category": "At Large Support"
    }
]