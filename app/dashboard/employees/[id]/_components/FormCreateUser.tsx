'use client'
import registerEmployee from "@/actions/users/register-employee";
import { Employee } from "@/entities";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

export default function FormCreateUserEmployee({employee}: {employee: Employee}){
    const [password, setPassword] = useState<string>();
    const [visible, setVisible]= useState<boolean>(false);
    const {employeeId}= employee;
    const registerEmployeeById = registerEmployee.bind(null, employeeId)

    function generate(arg0: {}) {
        throw new Error("Function not implemented.");
    }

    return (
        <form action={registerEmployeeById}>
            <h1 className="text-white text-xl font bold text-center"> Crear Usuario</h1>
            <Input name="userEmail" label="Correo de cuenta"/>
            <Input value={password} type={visible?"text": "password"} name="userPassword" label="Contraseña" endContent=
            {
            <button type="button" onMouseUp={()=>setVisible(false)} onMouseDown={()=>setVisible(true)}>
              <LuEye size="30"/>  
            </button>

            }
            <Button color="danger" onPress={()=>{
                setPassword(generate({
                    length: 10
                }))
            
            }}>
                Generar Contraseña
            </Button>
            <Button type="submit">
                Crear Usuario
            </Button>
        </form>
    )
}