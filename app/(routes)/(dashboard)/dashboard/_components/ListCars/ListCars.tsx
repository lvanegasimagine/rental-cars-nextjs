"use client";
import React from "react";
import { ListCarsProps } from "./ListCars.types";
import { Car } from "@prisma/client";
import Image from "next/image";
import { currency } from "@/utils";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import { ModalAddReservation } from "@/components/shared/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";

export function ListCars({ cars }: ListCarsProps) {
    const { addLovedItem, lovedItems, removeLovedItem } = useLovedCars();
    console.log("🚀 ~ ListCars ~ lovedItems:", lovedItems);
    return (
        <div className="grid-cols-custom-grid grid gap-6">
            {cars.map((car: Car) => {
                const likedCar = lovedItems.some((item) => item.id === car.id);
                return (
                    <div
                        className="rounded-lg p-1 shadow-[0_7px_14px_#EAEAEA] hover:shadow-lg"
                        key={car.id}
                    >
                        <Image
                            src={car.photo}
                            alt={car.name}
                            width={400}
                            height={600}
                            className="rounded-lg"
                        />
                        <div className="p-3">
                            <div className="mb-3 flex flex-col gap-x-4">
                                <p className="min-h-16 text-xl lg:min-h-fit">{car.name}</p>
                                <p>{currency.format(+car.priceDay)} /dia</p>
                            </div>
                            <p className="mb-1 flex items-center capitalize">
                                <Gem className="mr-2 h-4 w-4" strokeWidth={1} />
                                {car.type}
                            </p>
                            <p className="flex items-center capitalize">
                                <Wrench className="mr-2 h-4 w-4" strokeWidth={1} />
                                {car.transmission}
                            </p>
                            <p className="flex items-center capitalize">
                                <Users className="mr-2 h-4 w-4" strokeWidth={1} />
                                {car.people}
                            </p>
                            <p className="flex items-center capitalize">
                                <Fuel className="mr-2 h-4 w-4" strokeWidth={1} />
                                {car.engine}
                            </p>
                            <p className="flex items-center capitalize">
                                <Gauge className="mr-2 h-4 w-4" strokeWidth={1} />
                                {car.cv} CV
                            </p>
                            <div className="flex items-center justify-center gap-x-3">
                                <ModalAddReservation car={car} />
                                <Heart
                                    className={`mt-2 cursor-pointer ${likedCar && "fill-red-700 stroke-red-700"}`}
                                    onClick={likedCar ? () => removeLovedItem(car.id) : () => addLovedItem(car)}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
