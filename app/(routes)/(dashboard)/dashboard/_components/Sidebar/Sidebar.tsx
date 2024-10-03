import { LogoDashboard } from "../LogoDashboard";
import { SidebarRoutes } from "../SidebarRoutes";

export function Sidebar() {
    return (
        <div className="h-screen">
            <div className="flex h-full flex-col border-r">
                <LogoDashboard />
                <SidebarRoutes />
            </div>
        </div>
    );
}
