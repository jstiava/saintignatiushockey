'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const slides = [
    {
        title: '2022 CCHL Champions Saint Ignatius Wolfpack',
        description: 'Wolfpack Hockey captures its first CCHL Championship in school history defeating Benet Academy in 5 games.',
        image: '/media/photos/2022-cchl-champions.png',
    },
    {
        title: '2023 Back-to-back CCHL Champions Saint Ignatius Wolfpack',
        description: 'Wolfpack Hockey captures its 2nd straight CCHL Championship in school history defeating Providence Catholic in 5 games.',
        image: '/media/photos/2023-cchl-champions.jpeg',
    },
    {
        title: 'Wolfpack Three-Peat, 2024 CCHL Champions',
        description: 'Wolfpack Hockey captures its 3rd straight CCHL Championship in school history defeating Providence Catholic in 5 games.',
        image: '/media/photos/2024-cchl-champions.jpeg',
    },
    {
        title: 'Wolfpack are CCHL Champions for the fourth consequtive year.',
        description: 'Wolfpack Hockey captures its 4th straight CCHL Championship in school history defeating Providence Catholic in 5 games.',
        image: '/media/photos/2025-cchl-champions.jpeg',
    },
]

export default function MainCarousel() {
    return (
        <Carousel
            opts={{
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className='rounded-none!'>
                {slides.map((slide) => (
                    <CarouselItem key={slide.title}>
                        <div className={cn(
                            "relative sm:aspect-[16/11] h-fit overflow-hidden rounded-none bg-dark-maroon",
                            "aspect-[3/4]"
                        )}>

                            {/* Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 h-full w-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            {/* <img className=" block  absolute inset-0 h-full w-full object-cover object-center" /> */}

                            {/* Content */}
                            <div className="flex flex-col w-full absolute inset-x-0 bottom-0 p-6 md:p-10 gap-3 ">
                                <h2 className="mt-2 font-black text-xl uppercase text-white">
                                    {slide.title}
                                </h2>

                                <span className="text-sm font-semibold leading-snug! text-white/80 w-full pr-[10%]!">{slide.description}</span>
                            </div>

                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="left-4 text-black" />
            <CarouselNext className="right-4 text-black" />
        </Carousel>
    )
}