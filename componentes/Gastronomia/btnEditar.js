'use client';

import { updateGastronomiaAction } from '@/componentes/Gastronomia/controller/controllerGastro.js';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { updateGastronomiaAction } from './controller/controllerGastro';

export default function FormGastro({ Gastronomia }) {

  const router = useRouter();

  // Função responsável por editar o aluno
  async function handleEditar(formData) {

    try {
      // 1. Chama a Server Action passando id + dados do form
      const res = await updateGastronomiaAction(Gastronomia.id, formData);

      // 2. Fecha o modal e exibe toast de sucesso ou erro
      if (res.success) {

        // 3. Atualiza a tabela (Server Component)
        router.refresh();

        toast.success(res.message);

      } else {

        toast.error(res.error);

      }

    } catch (error) {

      console.error('Erro ao editar Local:', error);

    }

  }

  return (

    <>
      {/* Aqui usamos a função didática */}
      <form action={handleEditar} className="space-y-3">

        {/* Nome */}
        <div>
          <label className="text-sm text-gray-600">Nome</label>

          <input
            name="nome"
            defaultValue={Gastronomia.nome}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />

        </div>

        {/* Curso */}
        <div>
          <label className="text-sm text-gray-600">Curso</label>

          <input
            name="senha"
            defaultValue={Gastronomia.senha}
            className="w-full border rounded-lg px-3 py-2 mt-1"
          />

        </div>

        {/* Botões */}
        <div className="flex justify-end gap-2 pt-2">

          <button
            type="submit"
            className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Salvar alterações
          </button>

        </div>

      </form>
    </>

  );

}