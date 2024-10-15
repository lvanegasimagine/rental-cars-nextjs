import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { TableReserves } from "./_components/TableReserves";

const ReservePage = async () => {
    const { userId } = auth();

    if (!userId) return redirect("/");

    const orders = await db.order.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    console.log(orders);
    return (
        <div>
            <h1 className="mb-5 text-3xl">Reserves Page</h1>
            {orders.length === 0 ? (
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-xl">No tienes ningun pedido</h2>
                    <p>Haz tus pedidos a traves de la pagina de vehiculos</p>
                    <Link href='/cars'>
                        <Button>Lista de Vehiculos</Button>
                    </Link>
                </div>
            ) : (
                <TableReserves orders={orders} />
            )}
        </div>
    );
};

export default ReservePage;
