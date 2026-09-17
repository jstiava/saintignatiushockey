'use server'

import DesktopHeader from '@/Header/DesktopHeader'
import MobileHeader from '@/Header/MobileHeader'
import { headers } from 'next/headers'
import { userAgent } from 'next/server'

export default async function Header() {
    const { device } = userAgent({
        headers: await headers(),
    })

    const isMobile = device.type === 'mobile'

    return (
        <>
            <MobileHeader />
            <DesktopHeader />
        </>
    )
}