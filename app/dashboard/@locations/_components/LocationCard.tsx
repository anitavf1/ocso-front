import {Location} from "@/entities";
import axios from "axios";
import {Card, CardHeader, CardBody, Divider, Link} from "@nextui-org/react"
import { cookies } from "next/headers";
import { authHeaders } from "@/helpers/authHeaders";
export default async function LocationCard({
    store,
}: {
    store:string | string []| undefined
}){
    if(!store) return null;
    const response= await fetch(`${API_URL}/locations/${store}`, {
        headers: {
            ...authHeaders()
        },
        next:{
            tags: ["dashboard: locations", `dashboard: locations: ${store}`]
        }
    });
    const data: Location = await response.json()
    return (
        <Card>
                <CardHeader>
                <b className="w-full">{data.locationName}</b>
                <br/>
                </CardHeader>
                <Divider/>
                <CardBody>
                <p className="w-full">
                    Manager: 
                    <Link href={{pathname:`/dashboard/managers`}}>
                    <b>{data.manager?.managerFullName}</b>
                    </Link>
                    </p>
                </CardBody>
               
        </Card>
    )
}