'use server'

import { Button } from "@/components/ui/button";
import { FOOTER_ITEMS } from "@/Footer";
import Image from "next/image";


export default async function Footer() {

    return (
        <div className="flex items-start justify-start w-full h-100 bg-near-black p-12 border-t border-t-black">

            <div className="flex flex-col gap-8">

                {/* LETTERHEAD - Wordmark */}
                <div className="flex w-full items-centerh-fit">
                    <Image alt="Saint Ignatius Hockey Club" src={"/media/teams/ignatius-2.png"} width={150} height={50} className="" />
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-xs">Saint Ignatius Hockey Club</span>
                    <span className="text-xs">Chicago, IL</span>
                </div>
                {/* <span className="text-xs font-qb opacity-25">Saint Ignatius<br /> Hockey Club</span> */}
                <div className="flex flex-col gap-2">

                    <div className="flex flex-col gap-0">
                        {FOOTER_ITEMS.map(item => {

                            return (
                                <Button
                                    key={item.href}
                                    {...{
                                        variant: 'link',
                                        className: 'text-white w-fit px-0 h-6 text-xs underline decoration-muted/10 hover:decoration-white'
                                    }}><a href={item.href}>{item.label}</a></Button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}


