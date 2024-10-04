import React from "react";
import { SidebarItemProps } from "./SidebarItem.types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SidebarItem({
    item: { href, label, icon: Icon },
}: SidebarItemProps) {

    const pathname = usePathname()

    const activePath = pathname == href
    return (
        <Link
            href={href}
            className={cn(
                `mt-2 flex cursor-pointer items-center gap-x-2 rounded-lg p-2 text-sm text-slate-700 hover:bg-slate-300/20`,
                activePath && "bg-blue-400/20"
            )}
        >
            <Icon className="h-5 w-5" strokeWidth={1} />
            {label}
        </Link>
    );
}
