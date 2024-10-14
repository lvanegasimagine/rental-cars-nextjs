import { Navbar } from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function OrderErrorPage() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-7xl p-6">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <h1 className="text-2xl">
                        OPS! Ha ocurrido un error. Vuelva a intentarlo mas tarde
                    </h1>
                    <Link href="/">
                        <Button> Volver a los productos</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
