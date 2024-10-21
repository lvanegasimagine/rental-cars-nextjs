import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Link } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";
import { TableReservesAdmin } from "./_components/TableReserves";
import { isAdmin } from "@/lib/isAdmin";

const ReservesAdminPage = async () => {
    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user || !isAdmin(userId)) return redirect("/dashboard");

    const orders = await db.order.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div>
            <h1 className="mb-4 text-3xl">Reserves Page</h1>
            {orders.length === 0 ? (
                <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-xl">No tienes ningun pedido</h2>
                    <p>Haz tus pedidos a traves de la pagina de vehiculos</p>
                    <Link href="/cars">
                        <Button>Lista de vehiculos</Button>
                    </Link>
                </div>
            ) : (
                <TableReservesAdmin orders={orders} />
            )}
        </div>
    );
};

export default ReservesAdminPage;
