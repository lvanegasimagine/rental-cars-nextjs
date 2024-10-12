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
                <h2 className="text-3xl font-bold">List of cars</h2>
            </div>
            {/* <p className="mt-2 text-sm text-muted-foreground text-slate-500">
                Listado de coches
            </p> */}
            <ListCars cars={cars} />
        </div>
    );
};

export default DashboardPage;
