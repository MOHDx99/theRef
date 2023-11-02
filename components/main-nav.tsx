"use client"

import { cn } from "@/lib/utils"
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
    className,
    ...props
}:React.HTMLAttributes<HTMLElement>){

    const pathname = usePathname();
    const param = useParams();

    const routes = [
        {
            href: `/${param.storeId}`,
            label : 'Overview',
            active: pathname ===`/${param.storeId}`,
        },

        {
            href: `/${param.storeId}/billboards`,
            label : 'BillBoards',
            active: pathname ===`/${param.storeId}/billboards`,
        },

        {
            href: `/${param.storeId}/settings`,
            label : 'Settings',
            active: pathname ===`/${param.storeId}/settings`,
        },

    ];

    return(
        <nav
            className={cn("flex items-center space-x-4 lg:space-x-6", className)}
        >
            {routes.map((route) => (
                <Link 
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        route.active ? " text-black dark:text-white" : "text-muted-foreground" 
                        )}
                    >
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}