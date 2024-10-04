import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Loader, Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";

export function NavbarDashboard() {
    return (
        <div className="flex h-20 w-full items-center justify-between gap-x-4 border-b bg-background px-2 md:px-6">
            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SidebarRoutes />
                    </SheetContent>
                </Sheet>
            </div>
            <div className="flex items-center w-full gap-x-2 justify-end">
                <ClerkLoading>
                    <Loader className="h-5 w-5 animate-spin text-blue-700/60" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton />
                </ClerkLoaded>
            </div>
        </div>
    );
}
