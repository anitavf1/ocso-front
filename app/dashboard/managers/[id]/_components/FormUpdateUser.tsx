import updateUser from "@/actions/users/update";
import {Employee, User} from "@/entities"
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export default function FormUpdateUser({user}: {user: User}){
    const {userId}= user;
    const [password, setPassword] = useState<string>();
    const [visible, setVisible]= useState<boolean>(false);
    const updateUserById = updateUser.bind(null, userId)
    return (
        <form action={updateUserById} className="py-10 flex flex-col">
            <h1 className="text-white text-xl font bold text-center"> Actualizar Usuario</h1>
            <Input name="userEmail" label="Correo de cuenta"/>
            <Input value={password} defaultValue={user.userPassword} type={visible?"text": "password"} name="userPassword" label="Contraseña" endContent=
            {
            <button type="button" onMouseUp={()=>setVisible(false)} onMouseDown={()=>setVisible(true)}>
              <LuEye size="30"/>  
            </button>

            }
            <Button 
                color="danger" 
                onPress={()=>{
                setPassword(
                    generate({
                    length: 10,
                    }),
                );
            }}
            >
                Generar Contraseña
            </Button>
            <Button color="primary" type="submit">
                Crear Usuario
            </Button>
        </form>
    )
}

