import {Button, Input} from "@nextui-org/react";
import {createLocation} from "@/actions/locations/create";
import { API_URL } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
export default async function FormNewLocation({store}:{store:string | string [] | undefined}){
    if(store) return null;
    const responseManagers= await fetch(`${API_URL}/managers`,{
        headers: {
           ...authHeaders()
        },
        next: {
            tags: ["dashboard: managers"]
        }

    })
    const dataManagers: Manager[] = await responseManagers.json()
    const responseLocations= await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders()
        }, 
        next: {
            tags: ["dashboard:locations", "dashboard: locations: managers"]
        }
    })
    const dataLocations: Location[]= await responseLocations.json()
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6  w-full rounded-lg">
            <h1 className="text-3xl  text-white text-center">Crear tienda</h1>
            <Input required={true} label="Nombre de la tienda" placeholder="Oxxo Juriquilla" name="locationName"/>
            <Input required={true} label="Dirección" placeholder="Av de la Luz" name="locationAddress"/>
            <Input required={true} label="Latitud" placeholder="-120" name="locationLat"/>
            <Input required={true} label="Longitud"placeholder="20" name="locationLng"/>
            <SelectManager managers={dataManagers} locations= {dataLocation}/>
            <button type="submit" color="primary">Subir</button>
        </form>
    );
}