"use client";

import { Button } from "@/components/ui/button";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { useAuth } from "@clerk/nextjs";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { Car } from "@prisma/client";
import Link from "next/link";
import { ModalAddReservation } from "@/components/shared/ModalAddReservation";
import { ListCarsProps } from "./ListCars.types";
import { currency } from "@/utils";
import { SkeletonCars } from "@/components/shared/SkeletonCars";

export function ListCars({ cars }: ListCarsProps) {
    const { userId } = useAuth();
    const { addLovedItem, removeLovedItem, lovedItems } = useLovedCars();

    if (!cars) {
        return <SkeletonCars />;
    }
    return (
        <>
            {cars.length === 0 && (
                <p>No se han encontrado vehiculos con estos filtros</p>
            )}
            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
                {cars.map((car: Car) => {
                    const {
                        priceDay,
                        photo,
                        name,
                        type,
                        transmission,
                        people,
                        engine,
                        cv,
                        id,
                    } = car;
                    const likedCar = lovedItems.some((item) => item.id === car.id);
                    return (
                        <div
                            key={car.id}
                            className="rounded-lg p-1 shadow-md hover:shadow-lg"
                        >
                            <Image
                                src={photo}
                                alt="car"
                                width={400}
                                height={600}
                                className="rounded-lg"
                            />
                            <div className="p-3">
                                <div className="mb-3 flex flex-col gap-x-4">
                                    <p className="min-h-16 text-xl lg:min-h-fit">{name}</p>
                                    <p className="">{currency.format(+priceDay)} / mes</p>
                                </div>
                                <p className="flex items-center capitalize">
                                    <Gem className="mr-2 h-4 w-4" strokeWidth={1} /> {type}
                                </p>
                                <p className="flex items-center capitalize">
                                    <Wrench className="mr-2 h-4 w-4" strokeWidth={1} />{" "}
                                    {transmission}
                                </p>
                                <p className="flex items-center capitalize">
                                    <Users className="mr-2 h-4 w-4" strokeWidth={1} /> {people}
                                </p>
                                <p className="flex items-center capitalize">
                                    <Fuel className="mr-2 h-4 w-4" strokeWidth={1} /> {engine}
                                </p>
                                <p className="flex items-center capitalize">
                                    <Gauge className="mr-2 h-4 w-4" strokeWidth={1} /> {cv} CV
                                </p>
                                {userId ? (
                                    <div className="flex items-center justify-center gap-x-3">
                                        <ModalAddReservation car={car} />
                                        <Heart
                                            className={`mt-2 cursor-pointer ${likedCar && "fill-black"}`}
                                            onClick={() =>
                                                likedCar
                                                    ? () => removeLovedItem(car.id)
                                                    : () => addLovedItem(car)
                                            }
                                        />
                                    </div>
                                ) : (
                                    <div className="mt-2 w-full text-center">
                                        <Link href="/sign-in">
                                            <Button variant='outline' className="w-full">Inicia Sesion para reservar</Button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
