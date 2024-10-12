'use client'
import React from "react";
import { ListCarsProps } from "./ListCars.types";
import { Car } from "@prisma/client";
import Image from "next/image";
import { currency } from "@/utils";
import { Fuel, Gem, Heart, Users, Wrench } from "lucide-react";
import { ModalAddReservation } from "@/components/shared/ModalAddReservation";

export function ListCars({ cars }: ListCarsProps) {
    return <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {cars.map((car: Car) => (
            <div className="p-1 rounded-lg shadow-[0_7px_14px_#EAEAEA] hover:shadow-lg" key={car.id}>
                <Image src={car.photo} alt={car.name} width={400} height={600} className="rounded-lg" />
                <div className="p-3">
                    <div className="flex flex-col mb-3 gap-x-4">
                        <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
                        <p>{currency.format(+car.priceDay)} /dia</p>
                    </div>
                    <p className="flex capitalize items-center mb-1">
                        <Gem className="h-4 w-4 mr-2" strokeWidth={1} />
                        {car.type}
                    </p>
                    <p className="flex capitalize items-center">
                        <Wrench className="h-4 w-4 mr-2" strokeWidth={1} />
                        {car.transmission}
                    </p>
                    <p className="flex capitalize items-center">
                        <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                        {car.people}
                    </p>
                    <p className="flex capitalize items-center">
                        <Fuel className="h-4 w-4 mr-2" strokeWidth={1} />
                        {car.engine}
                    </p>
                    <div className="flex items-center justify-center gap-x-3">
                        <ModalAddReservation car={car} />
                        <Heart className='mt-2 cursor-pointer' />
                    </div>
                </div>
            </div>
        ))}
    </div>
}
