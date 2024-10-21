"use client";

import { ModalAddReservation } from "@/components/shared/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { currency } from "@/utils";
import { Car } from "@prisma/client";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";

export function ListLovedCars() {
    const { lovedItems, removeLovedItem } = useLovedCars();

    return (
        <>
            {lovedItems.length === 0 ? (
                <h2>Aún no tienes coches que te gustan</h2>
            ) : (
                <div className="grid grid-cols-custom-grid gap-6">
                    {lovedItems.map((car: Car) => {
                        const { priceDay, photo, name, type, transmission, people, engine, cv, id } = car
                        return (
                            <div className="p-1 rounded-lg shadow-md hover:shadow-lg" key={id}>
                                <Image src={photo} alt={name} width={400} height={600} className="rounded-lg" />
                                <div className="p-3">
                                    <div className="flex flex-col mb-3 gap-x-4">
                                        <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                                        <p>{currency.format(+priceDay)} / dia</p>
                                    </div>
                                    <p className="flex items-center capitalize">
                                        <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                                        {type}
                                    </p>
                                    <p className="flex items-center capitalize">
                                        <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                                        {transmission}
                                    </p>
                                    <p className="flex items-center capitalize">
                                        <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                                        {people}
                                    </p>
                                    <p className="flex items-center capitalize">
                                        <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
                                        {engine}
                                    </p>
                                    <p className="flex items-center capitalize">
                                        <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                                        {cv}
                                    </p>
                                    <div className="flex items-center justify-center gap-x-3">
                                        <ModalAddReservation car={car} />
                                        <Heart className="mt-2 cursor-pointer fill-red-700 stroke-red-700" onClick={() => removeLovedItem(car.id)} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    );
}
