
import { Employee } from "@/entities";
import { Image, Link } from "@nextui-org/react";
import DeleteEmployee from "./DeleteEmployee";
import CreateUser from "./CreateUser";
import FormCreateUserEmployee from "./FormCreateUser";
import FormUpdateUserEmployee from "./FormUpdateUser";
import { LuUser } from "react-icons/lu";
import { ReactNode } from "react";
export default function EmployeeDataCard({employee, children}:{employee:Employee, children: ReactNode}){
    return(
        <div className="flex flex-row items-center gap-2 bg-white rounded-md flex-grow-0 h-fit px-4 m-2 py-2 border-2 border-orange-400">
                <div className="text-xl flex flex-col h-full justify-between">
                <div className="h-full py-10">
                    <h1 className="font-bold">{employee.employeeName+""+employee.employeeLastName}</h1>
                    <h1>{employee.employeeEmail}</h1>
                    <h1>{employee.employeePhoneNumber}</h1>
                </div>
                <div>
                <DeleteEmployee employeeId={employee.employeeId}/>
                </div>
                
                
                <Link 
                    className="underline"
                    href={{
                        pathname:`/dashboard`,
                        query: {
                            store: String (employee.location?.locationId)
                        } 

                    }}
                >
                    <h1>{employee.location?.locationName}</h1>
                </Link>
                
            </div>
            <div className="h-full py-20 w-1 bg-zin{c-300 mx-6"/>
            
              
                    <CreateUser icon={<LuUser size="20"/>} photo={employee?.employeePhoto}>
                        {
                            !employee.user ? (
                                <FormCreateUserEmployee employee={employee}/>
                            ) : (
                                <FormUpdateUserEmployee user={employee.user}/>
                            )
                        }
                    </CreateUser>
                
            </div>
    )
}