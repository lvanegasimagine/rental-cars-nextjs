"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { dataBrands } from "./SliderBrands.data";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export function SliderBrands() {
    return (
        <Reveal
            position="bottom"
            className="mb-10 mt-5 flex justify-center gap-x-20 lg:pb-20"
        >
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {dataBrands.map(({ url }) => (
                        <CarouselItem
                            key={url}
                            className="basis-4/4 md:basis-2/4 lg:basis-1/6"
                        >
                            <Image
                                src={`/images/brands/${url}`}
                                alt="Brand"
                                width={90}
                                height={90}
                                className="aspect-[3/2] object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Reveal>
    );
}