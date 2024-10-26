import Link from "next/link";
import { Button, Input, Spinner } from "@nextui-org/react";
import { API_URL } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
    const [submmitting, setSubmitting]= useState(false)
    const router = useRouter()
     const handleSubmit = async (e: any) =>{
        setSubmitting(true);
        e.preventDefault()
        const formData= new FormData(e.target)
        let authData: any= {}
        authData.userEmail=formData.get("userEmail");
        authData.userPassword=formData.get("userPassword");
        try{
            const response= await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify(authData),
                credentials: 'include',
            });
            if(response.status===201) router.push('/dashboard');
            setSubmitting(false);
        } catch(e) {
            setSubmitting(false);
        }
        return;
        
    }

    return (
        <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
            <p className="text-2x1 my-4 text-white">
                Iniciar sesión
            </p>
            <div className="flex flex-col gap-2 my-4 items-center">
                <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
                <Input label="Contraseña" name="userPassword"type="Contraseña" isRequired={true} size="sm" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button color="primary" type="submit" disabled={submmitting}>{submmitting?"Enviando...": "Iniciar Sesión"}</Button>
                <p className="text-white">
                    ¿No tienes cuenta? <Link href="/signup" className="text-red-600 underline">Registrate</Link>
                </p>
            </div>
        </form >
    );
}