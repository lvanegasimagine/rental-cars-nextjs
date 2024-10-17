import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
    categoryOurFleet,
    dataFirstBlockOurFleet,
    dataSecondBlockOurFleet,
} from "./OurFleet.data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function OurFleet() {
    return (
        <div className="mx-auto max-w-6xl p-6 py-12 text-center lg:py-40">
            <h3 className="text-2xl font-bold lg:text-6xl">Our Vehicle Feet</h3>
            <p className="mx-auto mb-5 mt-2 w-full max-w-2xl text-center text-lg lg:mb-10 lg:mt-5 lg:text-xl">
                Dont deny yourself pleasure of driving the best premium cars from around
                the world here and now the world
            </p>
            <div className="mx-auto mb-5 grid max-w-2xl grid-cols-2 items-center justify-center gap-4 lg:grid-cols-6">
                {categoryOurFleet.map(({ name, active }) => (
                    <div
                        key={name}
                        className={cn(
                            "rounded-xl px-3 py-2",
                            active ? "bg-black text-white" : "bg-slate-100",
                        )}
                    >
                        {name}
                    </div>
                ))}
            </div>
            <div className="mb-10">
                <div className="mb-6 grid grid-cols-3 gap-x-6">
                    {dataFirstBlockOurFleet.map(({ url }) => (
                        <div key={url}>
                            <Image
                                src={`/images/cars/${url}`}
                                alt="Car"
                                width={400}
                                height={300}
                                className="rounded-xl"
                            />
                        </div>
                    ))}
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-4 gap-x-6">
                    {dataSecondBlockOurFleet.map(({ url }) => (
                        <div key={url}>
                            <Image
                                src={`/images/cars/${url}`}
                                alt="Car"
                                width={400}
                                height={300}
                                className="aspect-[3/2] rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Link href="/cars">
                <Button className="mt-5 rounded-xl p-6 text-lg" variant={"outline"}>
                    Show all models
                    <MoveRight className="ml-2" />
                </Button>
            </Link>
        </div>
    );
}
