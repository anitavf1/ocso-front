
import { Button, Input } from "@nextui-org/react";
import createEmployee from "@/actions/employees/create";
import { authHeaders } from "@/helpers/authHeaders";
import SelectLocations from "./SelectLocation";
export default async function FormCreateEmployee (){
    const responseLocations= await fetch (`${API_URL}/locations`, {
        headers: {
            ...authHeaders();
        }
    })
    const locations= await responseLocations.json();
    return(
        <form action={createEmployee} className="flex felx-col gap-2 p-8 roundend-md m-2 bg-orange-600 h-fit">
            <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Marco" />
            <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Aurelio" />
            <Input isRequired={true} label="Correo electrónico" name="employeeEmail" placeholder="Marco@gmail.com"/>
            <Input isRequired={true} label="Número de teléfono" name="employeePhoneNumber" placeholder="4423467890"/>
            <Input type="file" name="employeePhoto" />
            <SelectLocations stores={locations}/>
            <Button type="submit" color="primary">Crear empleado</Button>
        </form>
    )
}