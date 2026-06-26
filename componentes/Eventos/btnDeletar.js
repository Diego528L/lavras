'use client';
import{deleteEvento}   from "@/app/actions/eventos";
import { useRouter } from "next/navigation";
import { toast } from "sonner"; 
export default function BtnDeletar({id}) {
    const router = useRouter(); 

    async function handleDelete() {
        const res = await deleteEvento(id);
        
        if (res?.success) {
            toast.success("res.message");
        
        } else {
            toast.error(res.error);
        }
          router.refresh(); 
    }

    return (
        <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition "
        >
            Deletar
        </button>
    );
}   
