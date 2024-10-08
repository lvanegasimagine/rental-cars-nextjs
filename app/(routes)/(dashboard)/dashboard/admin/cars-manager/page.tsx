import React from "react";
import { ButtonAddCar } from "./_components/ButtonAddCar";
import { ListCars } from "./_components/ListCars";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const CarsManager = async () => {
    const { userId } = auth();

    if (!userId) return redirect("/");

    const cars = await db.car.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    console.log("🚀 ~ CarsManager ~ car:", cars)
    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Manage Your Cars</h2>
                <ButtonAddCar />
            </div>
            <ListCars cars={cars} />
        </div>
    );
};

export default CarsManager;
