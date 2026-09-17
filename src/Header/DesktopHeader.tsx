'use server'

import { Button } from "@/components/ui/button";
import * as NavigationMenu from "@/components/ui/navigation-menu";
import { MENU_ITEMS } from "@/Header";
import ScheduleTicker from "@/Header/ScheduleTicker";
import Image from "next/image";

export default async function DesktopHeader() {

    return (
        <>

            <div className="z-30 hidden md:flex flex-col w-full h-fit bg-primary">
                <ScheduleTicker />

                {/* LETTERHEAD - 1 */}
                {/* <div className="flex items-center justify-center w-full h-25 bg-primary px-4">
                    <div className="flex w-full items-center gap-3 max-w-[80rem] pl-2">
                        <Image alt="Saint Ignatius Hockey Club" src={"/media/ignatius_hockey_2020.jpg"} width={36} height={36} className="rounded-full border border-2 border-white" />
                        <span className="font-qb text-3xl text-no-trim pt-[5px]">INTENTNESS</span>
                    </div>
                </div> */}

                {/* LETTERHEAD - Wordmark */}
                {/* <div className="flex items-center justify-center w-full h-30 bg-primary px-4">
                    <div className="flex w-full items-center gap-3 max-w-[80rem] pl-2">
                        <Image alt="Saint Ignatius Hockey Club" src={"/media/teams/ignatius-2.png"} width={150} height={50} className="" /> 
                    </div>
                </div> */}





            </div>

            <div className="z-30 hidden md:flex flex-col w-full gap-0 sticky top-0">

                {/* LETTERHEAD - 1 */}
                <a href="/" className="flex items-center justify-center w-full h-20 bg-primary px-4">
                    <div className="flex w-full items-center gap-4 max-w-[80rem] pl-2">
                        <Image alt="Saint Ignatius Hockey Club" src={"/media/teams/ignatius-1.png"} width={24} height={24} />
                        <span className="font-qb text-3xl text-no-trim pt-[5px]">WOLFPACK HOCKEY</span>
                    </div>
                </a>

                {/* SEPERATOR BARS */}
                <div className="relative flex w-full h-2 bg-secondary"
                >
                    {/* <div className="flex w-full h-full absolute mix-blend-overlay opacity-100" style={{
                        backgroundImage: `url("/media/black_woven_mesh_pattern.png")`,
                        backgroundSize: '120px 120px',
                    }} /> */}
                </div>
                <div className="flex w-full h-2 bg-white"></div>
                {/* LETTERHEAD */}
                <div className="sticky top-0 items-center justify-center w-full h-10 bg-primary px-4">


                    <div className="flex w-full items-center gap-0 max-w-[80rem] h-full">

                        <NavigationMenu.NavigationMenu>
                            <NavigationMenu.NavigationMenuList>
                                {MENU_ITEMS.map(item => {
                                    return (
                                        <NavigationMenu.NavigationMenuItem key={item.label} >
                                            <NavigationMenu.NavigationMenuTrigger>
                                                <Button className={'h-10 border-none cursor-pointer font-qb px-3 text-sm bg-transparent! rounded-xs'}>
                                                    <a className="" href={item.href}>{item.label}</a>
                                                </Button>
                                            </NavigationMenu.NavigationMenuTrigger>
                                            <NavigationMenu.NavigationMenuContent className={'p-0'} >
                                                <div className="flex flex-col gap-0 p-0 h-fit w-50">
                                                    {item.children?.map(child => {

                                                        return (
                                                            <Button
                                                                key={child.href}
                                                                {...{
                                                                    variant: 'ghost',
                                                                    className: 'cursor-pointer border-0 flex w-full p-2 rounded-none h-fit bg-transparent hover:bg-muted/10 '
                                                                }}><a {...{
                                                                    href: child.href,
                                                                    className: "text-xs text-left whitespace-normal  w-full text-white! font-semibold tracking-tight  h-fit"
                                                                }}>{child.label}</a></Button>
                                                        )
                                                    })}
                                                </div>
                                            </NavigationMenu.NavigationMenuContent>
                                        </NavigationMenu.NavigationMenuItem>
                                    )
                                })}
                            </NavigationMenu.NavigationMenuList>
                        </NavigationMenu.NavigationMenu>
                    </div>
                </div>
            </div>
        </>

    );
}