import HeaderAlbum from "@/componentes/Album/header";
import { AreaUpload } from "@/componentes/Album/area-upload";
import { BotaoEnviar } from "@/componentes/Album/botao-enviar";
import { enviarFoto } from "@/serveractions/enviarFoto";
import { excluirFoto } from "@/serveractions/excluirFoto";
import { prisma } from "@/lib/prisma";

export default async function AlbumPage() {
  const fotos = await prisma.foto.findMany({
    orderBy: { criadoEm: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <HeaderAlbum />

        <section className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-[#0a3604]">Adicionar nova imagem</h2>

          <form action={enviarFoto} className="mt-5 flex flex-col gap-4">
            <AreaUpload />

            <input
              type="text"
              name="titulo"
              required
              placeholder="Ex: Dia no parque"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-base outline-none hover:border-blue-600 hover:bg-blue-50 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <BotaoEnviar />
          </form>
        </section>

        <section className="rounded-3xl bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-800">Galeria de Memorias</h3>
          <p className="mt-1 text-gray-500">Todas as imagens enviadas em um so lugar.</p>

          {fotos.length === 0 ? (
            <p className="py-6 text-gray-500">Nenhuma foto ainda. Envie a primeira.</p>
          ) : (
            <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
              {fotos.map((foto) => (
                <div
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  key={foto.id}
                >
                  <img
                    src={foto.url}
                    alt={foto.titulo}
                    className="block h-auto w-full"
                  />

                  <p className="px-3 py-2 font-bold text-slate-800">{foto.titulo}</p>

                  <form action={excluirFoto} className="mx-3 mb-3">
                    <input type="hidden" name="id" value={foto.id} />
                    <input type="hidden" name="url" value={foto.url} />
                    <button
                      type="submit"
                      className="w-full rounded-lg border border-red-200 bg-red-100 px-2 py-2 text-sm font-bold text-red-700 hover:bg-red-200"
                    >
                      Excluir
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
