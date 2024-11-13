import {LuFrame,LuStore,LuTruck, LuUser, LuUsers, LuWheat} from "react-icons/lu";
import NavItem from "./NavItem";

export default function Sidebar(){
    return(
        <nav className="w-1/12 min-w-[8.333%] h-[90vh] bg-orange-200 flex flex-col items-center py-20">
            <NavItem icon={<LuStore className="text-4xl"/>} path="/dashboard/231231"/>
            <NavItem icon={<LuTruck className="text-4xl"/>} path="/dashboard/providers"/>
            <NavItem icon={<LuWheat className="text-4xl"/>} path="/dashboard/products" />
            <NavItem icon={<LuUser className="text-4xl"/>} path="/dashboard/managers"/>
            <NavItem icon={<LuUser className="text-4xl"/>} path="/dashboard/employeees"/>


        </nav>
    )
}