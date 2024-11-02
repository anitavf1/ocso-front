import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard ({provider}: {provider:Provider}) {
    return(
        <Card>
            <CardHeader> {provider.providerName}</CardHeader>
            <Divider/>
            <CardBody>
                <p>Correo electrónico:{provider.providerEmail}</p>
                <p>Número de teléfono:{provider.providerPhoneNumber}</p>
                <p>Productos:{provider.products.length}</p>
            </CardBody>
        </Card>
    )
}