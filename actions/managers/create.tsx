"use server";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
export default async function createManager (formData: FormData){
    let manager:any = {};
    for (const key of formData.keys()){
        manager[key]= formData.get(key);
        
    }
    manager.managerSalary = +manager.managerSalary
    if(manager.location){
        manager.location = +manager.location
    } else{
        delete manager.location
    }
    const response= await fetch (`${API_URL}/managers`, {
        method: "POST",
        body: JSON.stringify(manager), 
        headers: {
            ...authHeaders(),
        }, 
    })

    if(response.status===201) revalidateTag("dashboard:managers")    
    
}
 