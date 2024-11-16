import { authHeaders } from "@/helpers/authHeaders";
import EmployeeCard from "../_components/EmployeeCard";
import { Employee } from "@/entities";
import { API_URL } from "@/constants";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";
import DeleteEmployee from "./_components/DeleteEmployee";
import CreateUser from "./_components/CreateUser";
import FormCreateUserEmployee from "./_components/FormCreateUser";
import { LuUser } from "react-icons/lu";

export default async function EmployeePage({params}:{params:{id: string}}) {
    const responseEmployee= await fetch(`${API_URL}/employees/${params.id}`, {
        headers: {
            ...authHeaders()
        }
    })
    const employee: Employee = await responseEmployee.json()
    return (
        <div className="w-full h-[90vh] flex flex-row items-center justify-center">
          
                <EmployeeDataCard employee={employee}>
                <CreateUser icon={<LuUser size="20"/>} photo={employee?.employeePhoto}>
                <FormCreateUserEmployee employeeId="{employee.employeeId}"/>
                </CreateUser>
                </EmployeeDataCard>
           
            <FormUpdateEmployee employee={employee}/>
            
        </div>
    )

}