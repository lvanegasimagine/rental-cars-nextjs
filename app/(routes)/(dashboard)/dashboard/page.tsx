import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import React from "react";
import { ListCars } from "./_components/ListCars";

const DashboardPage = async () => {
    const { userId } = auth();

    if (!userId) return redirect("/");

    const cars = await db.car.findMany({
        where: {
            isPublish: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    console.log(cars);

    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold mb-6">List of cars</h2>
            </div>
            <ListCars cars={cars} />
        </div>
    );
};

export default DashboardPage;
