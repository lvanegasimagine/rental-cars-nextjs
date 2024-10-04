import React from "react";
import { Sidebar } from "./dashboard/_components/Sidebar";
import { NavbarDashboard } from "./dashboard/_components/NavbarDashboard";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-full w-full">
            <div className="hidden h-full w-80 xl:fixed xl:block">
                <Sidebar />
            </div>
            <div className="h-full w-full xl:ml-80">
                <NavbarDashboard />
                <div className="h-max p-6">{children}</div>
            </div>
        </div>
    );
}
