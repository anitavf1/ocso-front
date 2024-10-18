"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {ReactNode} from "react";

interface NavItemProps{
    icon: ReactNode
    path: string
}

const NavItem=({icon, path}: NavItemProps) =>{
    const pathName= usePathname();
    
    return (
        <><Link href={path} className="w-full flex justify-center" /><span className={pathName === path ? "bg-orange-700 w-1/2 flex justify-center transition-colors py-2" : "py-2"}>{icon}</span></> 
    )
}

export default NavItem;