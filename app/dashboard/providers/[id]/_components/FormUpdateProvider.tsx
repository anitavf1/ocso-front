import { Provider } from "@/entities";
import {Input, Button} from "@nextui-org/react"
import DeleteProvider from "./DeleteProvider";
import DeleteProviderButton from "./DeleteButton";
export default function FormUpdateProvider ({provider}: {provider:Provider}){
import updateProvider from "@/actions/providers/update";
    
    const {providerId}= provider;
    const updateProviderWithId= updateProvider.bind(null, providerId)
    return (
        <>
        <form action={updateProviderWithId} className="flex flex-wrap gap-4 flex-grow-0 bg-orange-200 rounded-md px-10 py-10 mr-20 items-center justify-center">
        <Input className="max-w-[250px]" defaultValue="{provider.providerName}" label="Nombre del proveedor"  placeholder="Pepsi" name="providerName"/>
        <Input className="max-w-[250px]" defaultValue="{provider.providerEmail}"label="Correo electrónico del proveedor" placeholder="business@pepsi.com" name="providerEmail" />
        <Input className="max-w-[250px]" defaultValue="{provider.providerPhoneNumber}" label="Número telefónico" placeholder="444XXXX" name="providerPhoneNumber"/>
        <Button color="primary" type="Submit">Actualizar</Button>
        <DeleteProvider>
            <h1 className="text-white text-4xl text-center">¿Estás seguro de eliminar al provedor <b> {provider.providerName}?</b></h1>
            <DeleteProviderButton providerId={providerId}/>
        </DeleteProvider>
        </form>
        </>
    )
}