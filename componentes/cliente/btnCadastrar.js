"use client";
import { useFormStatus  } from "react-dom ";
export default function SubmitButton (){
    const{pending} = useFormStatus();

    return (
        <button type="submit"
        disabled={pending}
        className="w-full bg-red-700 text-white py-2 rounded-lg hover-red-100 transition disabled:opacity-50">
            {pending ? "Cadastrando..." : "Cadastrar"}
        </button>

    );
    
}