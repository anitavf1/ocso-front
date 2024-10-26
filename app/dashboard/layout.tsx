'use client'

import Header from "./_components/Header"
import Sidebar from "./_components/_sideBar/SideBar"

export default function LayoutDashboard({
    children,
    locations,
}: Readonly<{
    children: React.ReactNode;
    locations: React.ReactNode;
}>){
    const path= usePathname()
    return(
        <div className="bg-orange-50">
            <Header/>
            <div className= "flex flex-row items-center">
            <Sidebar/>
            {children}
                {path === "/dashboard" ? locations:  null}
            {locations}
            </div>
        </div>
    )

}