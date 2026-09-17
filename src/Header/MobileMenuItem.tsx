'use client'
import * as Accordion from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export function MobileMenuItem({ item, className = "", textClassName = "" }: {
    item: any,
    className?: string,
    textClassName?: string
}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Accordion.AccordionItem
            {...{
                value: item.label,
                onOpenChange: open => {
                    setIsOpen(open)
                },
                open: isOpen,
            }}
        >
            <div className={cn(
                "flex items-center w-full h-fit min-h-12 py-1",
                className,
                "bg-near-black!"
            )}>
                <div className="flex-1 min-w-0 h-fit">
                    <Button className={cn(
                        'flex justify-start w-full h-full border-none cursor-pointer font-qb rounded-xs  border-0 whitespace-normal leading-tight bg-transparent!',

                    )}>
                        <a className={cn(
                            "px-5 w-full text-left text-lg no-underline w-full text-white! ",
                            textClassName
                        )} href={item.href}>{item.label}</a>
                    </Button>
                </div>
                {item.children && (
                    <div className="flex h-full! w-fit">
                        <div className="h-full bg-[#3d3d3d] w-[1px]" />
                        <Accordion.AccordionTrigger>
                            <Button {...{
                                className: 'flex items-center justify-center h-full aspect-square rounded-none! border-0! bg-transparent!',
                            }}>
                                <ChevronRight
                                    className={cn(
                                        "size-5 transition-transform duration-200 ease-in-out text-white",
                                        isOpen && "rotate-90"
                                    )}
                                />
                            </Button>
                        </Accordion.AccordionTrigger>
                    </div>
                )}
            </div>
            {item.children && (
                <Accordion.AccordionContent className={'p-0'}>
                    <div className="flex flex-col w-full h-fit bg-black">
                        {item.children?.map((child: any, index: number) => {

                            return (
                                <>
                                    <div key={`divider-${index}`} className="h-[1px] w-full bg-[#3d3d3d]" />
                                    <div
                                        key={child.label}
                                        className={cn(
                                            "flex items-center w-full h-fit min-h-9 py-2",
                                        )}>

                                        <div className="flex-1 min-w-0">
                                            <Button className={cn(
                                                'flex justify-start w-full h-full border-none cursor-pointer font-qb rounded-xs  border-0 whitespace-normal leading-tight bg-transparent!',

                                            )}>
                                                <a className={cn(
                                                    "px-5 w-full text-left text-md no-underline! w-full font-sans text-white!",
                                                    textClassName
                                                )} href={child.href}>{child.label}</a>
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </Accordion.AccordionContent>
            )}
        </Accordion.AccordionItem>
    );
}