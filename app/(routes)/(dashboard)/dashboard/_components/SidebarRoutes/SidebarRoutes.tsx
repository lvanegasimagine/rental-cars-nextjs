"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
import { isAdmin } from "@/lib/isAdmin";

export function SidebarRoutes() {
    const { userId } = useAuth();

    return (
        <div className="flex h-full flex-col justify-between">
            <div className="">
                <div className="p-2 md:p-6">
                    <p className="mb-2 uppercase text-slate-500">General</p>
                    {dataGeneralSidebar.map((item) => (
                        <SidebarItem key={item.label} item={item} />
                    ))}
                </div>
                <Separator />
                {isAdmin(userId) && (
                    <div className="p-2 md:p-6">
                        <p className="mb-2 uppercase text-slate-500">Admin</p>
                        {dataAdminSidebar.map((item) => (
                            <SidebarItem key={item.label} item={item} />
                        ))}
                    </div>
                )}
            </div>
            <div className="">
                <Separator />
                <footer className="mt-3 p-3 text-center">
                    2024. All rights reserved
                </footer>
            </div>
        </div>
    );
}
