import { Navbar } from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function OrderConfirmation() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl p-6">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <h1>Muchas Gracias por confiar en nosotros!</h1>
                    <p>
                        En breves momentos recibirass toda la informacion a traves de tu
                        correo electronico
                    </p>
                    <p>
                        Puedes visualizar todas tus reservas dentro de tu area de cliente
                    </p>
                    <Link href="/">
                        <Button>Volver a ver los productos</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmation;
