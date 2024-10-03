import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid h-full items-center justify-center lg:grid-cols-2">
            <div className="flex items-center justify-center">
                <ClerkLoading>
                    <Loader className="h-10 w-10 animate-spin text-muted-foreground" />
                </ClerkLoading>
                <ClerkLoaded>{children}</ClerkLoaded>
            </div>
            <div className="hidden h-full items-center justify-center lg:flex lg:flex-col lg:bg-slate-300">
                <Image src="/logo.svg" alt="logo" width={80} height={80} />
                <h1 className="mt-6 text-3xl font-bold">Vanegas Cars</h1>
            </div>
        </div>
    );
}
