'use client';
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deletarRegistro } from "../../Modulos/funcionariosActions/deletarRegistro.js";

export default function BtnDeletar({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm("Deseja realmente deletar este funcionário?");
    if (!confirmed) return;

    const res = await deletarRegistro(id);

    if (res?.success) {
      toast.success(res.message);
      router.refresh();
    } else {
      toast.error(res?.error || "Erro ao deletar funcionário.");
    }
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

