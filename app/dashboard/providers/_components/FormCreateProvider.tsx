import createProvider from "@/actions/providers/create";
import {Button, Input} from "@nextui-org/react"

export default function FormCreateProvider(){
    return (
        <form action={createProvider} className="flex flex-col gap-2 flex-grow-0" >
        <h1 className="text-2xl text-white">Crear Proveedor</h1> 
        <Input label="Nombre del proveedor"  placeholder="Pepsi" name="providerName"/>
        <Input label="Correo electrónico del proveedor" placeholder="business@pepsi.com" name="providerEmail" />
        <Input label="Número telefónico" placeholder="444XXXX" name="providerPhoneNumber"/>
        <Button color="primary" type="submit">Crear provedor</Button>
        </form>
    )
}