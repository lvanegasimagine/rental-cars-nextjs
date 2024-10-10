"use client";
import React from "react";
import { CardCarProps } from "./CardCar.types";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import {
    Car,
    Fuel,
    Gauge,
    Gem,
    Trash,
    Upload,
    Users,
    Wrench,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ButtonEditCar } from "../ButtonEditCar";
import axios from "axios";

export function CardCar({ itemCar }: CardCarProps) {
    const router = useRouter();

    const deleteCar = async () => {
        try {
            await axios.delete(`/api/car/${itemCar.id}`);
            toast({
                title: "Car deleted successfully.",
            });
            router.refresh();
        } catch (error) {
            toast({
                title: "Something went wrong.",
                description: "Please try again later.",
                variant: "destructive",
            });
        }
    };
    return (
        <div className="relative rounded-lg bg-white p-1 shadow-md hover:shadow-lg">
            <Image
                src={itemCar.photo}
                alt={itemCar.name}
                width={400}
                height={600}
                className="rounded-lg"
            />
            {itemCar.isPublish ? (
                <p className="absolute right-0 top-0 w-full bg-green-700 p-1 text-center text-white">
                    Published
                </p>
            ) : (
                <p className="absolute right-0 top-0 w-full bg-red-300 p-1 text-center text-white">
                    Not Published
                </p>
            )}
            <div className="relative p-3">
                <div className="mb-3 flex flex-col gap-x-4">
                    <p className="min-h-16 text-xl lg:min-h-fit">{itemCar.name}</p>
                    <p>{itemCar.priceDay}$ /dia</p>
                </div>
                <div className="grid gap-x-4 md:grid-cols-2">
                    <p className="flex items-center capitalize">
                        <Gem className="mr-2 h-4 w-4" strokeWidth={1} />
                        {itemCar.type}
                    </p>
                    <p className="flex items-center capitalize">
                        <Wrench className="mr-2 h-4 w-4" strokeWidth={1} />
                        {itemCar.transmission}
                    </p>
                    <p className="flex items-center capitalize">
                        <Users className="mr-2 h-4 w-4" strokeWidth={1} />
                        {itemCar.people}
                    </p>
                    <p className="flex items-center capitalize">
                        <Fuel className="mr-2 h-4 w-4" strokeWidth={1} />
                        {itemCar.engine}
                    </p>
                    <p className="flex items-center capitalize">
                        <Gauge className="mr-2 h-4 w-4" strokeWidth={1} />
                        {itemCar.cv} CV
                    </p>
                </div>
                <div className="mt-3 flex justify-between gap-x-4">
                    <Button variant={"destructive"} onClick={deleteCar}>
                        Delete
                        <Trash className="ml-2 h-4 w-4" />
                    </Button>

                    <ButtonEditCar carData={itemCar} />
                </div>
                {itemCar.isPublish ? (
                    <Button
                        className="mt-3 w-full"
                        variant="outline"
                        onClick={() => console.log("Unpublish")}
                    >
                        Unpublish <Upload className="ml-2 h-4 w-4" />
                    </Button>
                ) : (
                    <Button
                        className="mt-3 w-full"
                        variant="outline"
                        onClick={() => console.log("Publish")}
                    >
                        Publish
                        <Upload className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}
