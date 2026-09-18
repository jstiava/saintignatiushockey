'use server'

import { Button } from "@/components/ui/button";
import MobileScheduleTicker from "@/Header/MobileScheduleTicker";
import { ChevronRight, MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import * as Drawer from "@/components/ui/drawer"
import { MENU_ITEMS } from "@/Header";
import * as Accordion from "@/components/ui/accordion";
import { MobileMenuItem } from "@/Header/MobileMenuItem";
import { ScrollArea } from "@/components/ui/scroll-area";


export default async function MobileHeader() {

    return (
        <>
            <div className="z-30 lg:hidden flex flex-col w-full h-fit bg-white">
                {/* <MobileScheduleTicker /> */}

                <div className="flex items-center justify-center w-full h-20 bg-black">
                    <p className="text-xs">Ad space here.</p>
                </div>



            </div>


            {/* LETTERHEAD */}

            <div className="z-30 lg:hidden sticky top-0 flex flex-col w-full h-fit ">
                <div className="flex items-center justify-between w-full h-[4rem] bg-primary">
                    <a href="/" className="flex flex-col items-center justify-center aspect-square h-full p-[2px] w-[calc(100%-4rem)] bg-[#00000010]">

                        {/* Intentness wordmark */}
                        <div className="flex w-full items-center gap-3 px-4 bg-dark-maroon h-full">
                            <Image alt="Saint Ignatius Hockey Club" src={"/media/ignatius_hockey_2020.jpg"} width={26} height={26} className="rounded-full" />
                            <span className="font-qb text-xl text-no-trim pt-[5px]">INTENTNESS</span>
                        </div>


                    </a>
                    <div className="flex items-center justify-center aspect-square w-[4rem] h-full p-[2px] bg-[#00000010]">

                        <Drawer.Drawer swipeDirection="right">
                            <Drawer.DrawerTrigger render={
                                <Button className={'flex items-center justify-center aspect-square h-full bg-white text-black rounded-none bg-[#43242C] hover:bg-dark-maroon/70 border-none '}>
                                    {/* <MenuIcon className="size-7 text-dark-maroon " /> */}
                                    <div className="flex flex-col gap-0">
                                        <div className="flex h-[8px] w-7 bg-rich-gold" />
                                        <div className="flex h-[8px] w-7 bg-black" />
                                        <div className="flex h-[8px] w-7 bg-rich-gold" />
                                    </div>
                                </Button>
                            }>
                                {/* No trigger content */}
                            </Drawer.DrawerTrigger>
                            <Drawer.DrawerContent className={'top-0 left-0 p-0 h-screen w-screen rounded-none! bg-near-black text-white border-0!'}>
                                <div className="z-10 sticky top-0 bg-near-black flex w-full h-14 justify-between gap=0 shadow-lg">

                                    {/* Intentness wordmark */}
                                    <div className="flex w-full items-center gap-3 px-6  h-full">
                                        <Image alt="Saint Ignatius Hockey Club" src={"/media/ignatius_hockey_2020.jpg"} width={26} height={26} className="rounded-full" />
                                        <span className="font-qb text-md text-no-trim pt-[5px] leading-tight">WOLFPACK<br /> HOCKEY</span>
                                    </div>

                                    <div className="flex w-fit h-full">
                                        <div className="h-full bg-[#3d3d3d] w-[1px]" />
                                        <Drawer.DrawerClose render={
                                            <Button className={'flex h-full w-fit px-6 rounded-none! border bg-red-999 border-0'}>
                                                <XIcon className="size-5" />
                                                <span className="font-bold">CLOSE</span>
                                            </Button>
                                        } />
                                    </div>
                                </div>
                                <div className="flex-1 min-h-0">
                                    <ScrollArea id="mobile_menu_scroll_area" className="w-full h-full dark">
                                        <div id="overflow_ite" className="light flex flex-col w-full h-fit pb-30">

                                            <div className="h-[1px] w-full bg-[#3d3d3d]" />

                                            <Accordion.Accordion >
                                                {MENU_ITEMS.map((item, index) => {
                                                    return (
                                                        <>
                                                            <MobileMenuItem key={item.label} {...{
                                                                item
                                                            }} />
                                                            <div key={`divider-${index}`} className="h-[1px] w-full bg-[#3d3d3d]" />
                                                        </>
                                                    )
                                                })}
                                            </Accordion.Accordion>
                                        </div>
                                    </ScrollArea>
                                </div>
                                <div className="flex flex-col w-full bg-black h-fit">
                                    <div className="flex w-full h-fit">
                                        <div className="flex flex-col h-24  p-4 w-[50%]">
                                            <span className="text-xs">Chicago Blackhawks Ice Center</span>
                                            <span className="text-xs">1801 W Jackson Blvd</span>
                                            <span className="text-xs">Chicago, IL</span>
                                        </div>
                                        <div className="flex flex-col items-start h-24 p-4 w-[45%]">
                                            <span className="text-xs">Saint Ignatius College Prep</span>
                                            <span className="text-xs">1076 W. Roosevelt Rd.</span>
                                            <span className="text-xs">Chicago, IL</span>
                                        </div>
                                    </div>
                                    <div className="h-[1px] w-full bg-border" />
                                    <div className="flex items-center h-11 px-2 pb-1  bg-black gap-0 text-white underline text-xs">
                                        <Button {...{
                                            variant: "link",
                                            className: "text-white underline text-xs h-full"
                                        }}>@sicphockey</Button>
                                        <Button {...{
                                            variant: "link",
                                            className: "text-white underline text-xs h-full"
                                        }}>YouTube</Button>
                                        <Button {...{
                                            variant: "link",
                                            className: "text-white underline text-xs h-full"
                                        }}>Twitter(X)</Button>
                                    </div>

                                </div>
                            </Drawer.DrawerContent>
                        </Drawer.Drawer>

                    </div>
                </div>
                <div className="h-[1px] w-full bg-near-black" />
            </div>

        </>
    );
}



