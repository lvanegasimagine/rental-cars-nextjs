import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Loader, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FavoritesCar } from "../FavoritesCar/FavoritesCar";

export function Navbar() {
    const { userId } = auth();

    return (
        <div className="mx-auto max-w-5xl py-5">
            <div className="justify-between lg:flex">
                <Link href={"/"} className="flex items-center justify-center gap-x-2">
                    <Image src={"./logo.svg"} alt="VanegasCars" width={50} height={50} />
                    <span className="text-xl font-bold">VanegasCars</span>
                </Link>
                <div className="flex items-center justify-center gap-x-7">
                    <Link href={"/cars"}>List Cars</Link>
                    <Link href={"/dashboard"}>Dashboard</Link>
                    {userId ? (
                        <>
                            <FavoritesCar />
                            <ClerkLoading>
                                <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
                            </ClerkLoading>
                            <ClerkLoaded>
                                <UserButton />
                            </ClerkLoaded>
                        </>
                    ) : (
                        <Link href={"/sign-in"} className="flex gap-x-3">
                            <Button>
                                Iniciar Sesion
                                <User className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
