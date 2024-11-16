import ModalGeneric from "@/app/dashboard/_components/ModalGeneric"
import FormCreateUserManager from "@/app/dashboard/employees/[id]/_components/FormCreateUser"
import FormUpdateUser from "@/app/dashboard/employees/[id]/_components/FormUpdateUser"
import { Manager } from "@/entities"
import { Card, CardHeader, Divider, CardBody, Link } from "@nextui-org/react"
import { LuPlus } from "react-icons/lu"

export default function ManagerCard({manager}:{manager:Manager}){
    return (
        <Card className="mx-10 my-10 hover:scale-[110] hover:bg-blue-100">
                <CardHeader>
                <p className="text-xl">Nombre<b>{manager.managerFullName}</b></p>
                <p>
                    {
                        manager.user ? (
                            <ModalGeneric icon={<LuPlus size="20"/>}>
                            <FormUpdateUser user={manager.user}/>
                            </ModalGeneric>
                        ):(
                            <ModalGeneric icon={<LuPlus size="20"/>}>
                            <FormCreateUserManager manager={manager}/>
                            </ModalGeneric>
                        )
                    }
                </p>
                </CardHeader>
                <Divider/>
                <CardBody className="flex flex-row flex-grow-0 items-center gap-10 justify-center">
                    <div className="flex flex-col text-lg">
                    <p className="w-full">Email<b>{manager.managerEmail}</b></p>
                    <p className="w-full">Teléfono<b>{manager.managerPhoneNumber}</b></p>
                    <p className="w-full">
                        Salario: <b>{manager.managerSalary}</b>
                    </p>
                    <p className={manager.location? "": "hidden"}>Tienda<b><Link href={{pathname: `/dashboard`, query: {store: manager?.location?.locationId}}}>{manager?.location?.locationName}</b></Link></p>
                    </div>
                </CardBody>
        </Card>
        
    )
}