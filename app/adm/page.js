import Link from "next/link";
import Modal from "../../componentes/Basemodal";
import FormFunc from "../../componentes/Funcionarios/formFunc";
import { gravarRegistro as gravarFuncionario } from "../../Modulos/funcionariosActions/gravarRegistro.js";  

export default function AdmPage() {
  return (
    <div className="h-screen bg-gray-100">
      <div className="grid h-full grid-cols-[240px_1fr] grid-rows-[80px_1fr_60px] gap-4 p-4">
        <header className="col-span-2 flex items-center justify-center bg-green-900 text-xl md:text-2xl font-bold text-white rounded-2xl shadow-md">
          Painel Administrativo
        </header>

        <aside className="row-span-2 bg-gray-300 rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-bold text-green-900 mb-6">Menu</h2>
          <nav aria-label="Menu administrativo">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/adm"
                  className="block font-bold rounded-2xl px-4 py-3 text-gray-700 hover:bg-green-100 hover:text-green-900"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/funcionarios"
                  className="block font-bold rounded-2xl px-4 py-3 text-gray-700 hover:bg-blue-700 hover:text-blue-900"
                >
                  Funcionários
                </Link>
              </li>
              <li>
                <Link
                  href="/pontosTuristicos"
                  className="block font-bold rounded-2xl px-4 py-3 text-gray-700 hover:bg-green-200 hover:text-green-300"
                >
                  Pontos Turísticos
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos"
                  className="block font-bold rounded-2xl px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-900"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/gastronomia"
                  className="block font-bold rounded-2xl px-4 py-3 text-gray-700 hover:bg-yellow-100 hover:text-yellow-900"
                >
                  Gastronomia
                </Link>
              </li>
              <li>
                <Link
                  href="/hospedagem"
                  className="block font-bold rounded-2xl px-4 py-3 text-gray-700 hover:bg-red-600 hover:text-red-100 "
                >
                  Hospedagem
                </Link>
              </li>
              <li>
                <Link
                  href="/clientes"
                  className="block font-bold rounded-2xl px-4 py-3 text-gray-700 hover:bg-red-600 hover:text-red-100 "
                >
                  Clientes
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="bg-gray-100 rounded-2xl shadow-md p-6 min-h-screen">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-green-900">Dashboard</h2>
              <p className="text-gray-600">
                Aqui você pode acessar rapidamente as principais seções do
                sistema administrativo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <div className="rounded-3xl border border-green-100 bg-green-100 p-5">
                <h3 className="text-lg font-semibold text-green-900">
                  Pontos Turísticos
                </h3>
                <p className="mt-2 text-gray-700">
                  Gerencie os pontos turísticos cadastrados.
                </p>
                <Link
                  href="/adm/pontos"
                  className="mt-4 inline-block text-sm font-semibold text-green-700 hover:bg-green-100 hover:text-green-900"
                >
                  Ver mais
                </Link>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-blue-100 p-5">
                <h3 className="text-lg font-semibold text-blue-900">Eventos</h3>
                <p className="mt-2 text-gray-700">
                  Administre eventos e atividades.
                </p>
                <Link
                  href="/adm/eventos"
                  className="mt-4 inline-block text-sm font-semibold text-blue-700 hover:bg-blue-200 hover:text-blue-900"
                >
                  Ver mais
                </Link>
              </div>

              <div className="rounded-3xl border border-yellow-100 bg-yellow-100 p-5">
                <h3 className="text-lg font-semibold text-yellow-900">
                  Gastronomia
                </h3>
                <p className="mt-2 text-gray-700">
                  Gerencie restaurantes e pratos.
                </p>
                <Link
                  href="/adm/gastronomia"
                  className="mt-4 inline-block text-sm font-semibold text-yellow-700 hover:bg-yellow-200 hover:text-yellow-900"
                >
                  Ver mais
                </Link>
              </div>

              <div className="rounded-3xl border border-purple-100 bg-purple-100 p-5">
                <h3 className="text-lg font-semibold text-purple-900">
                  Hospedagem
                </h3>
                <p className="mt-2 text-gray-700">
                  Gerencie os estabelecimentos de hospedagem.
                </p>
                <Link
                  href="/adm/hospedagem"
                  className="mt-4 inline-block text-sm font-semibold text-purple-700 hover:bg-purple-200 hover:text-purple-900"
                >
                  Ver mais
                </Link>
              </div>

               <div className="rounded-3xl border border-purple-100 bg-red-100 p-5">
                <h3 className="text-lg font-semibold text-red-900">
                  Clientes
                </h3>
                <p className="mt-2 text-gray-700">
                  Gerencie os clientes da empresa.
                </p>
                <Link
                  href="/adm/clientes"
                  className="mt-4 inline-block text-sm font-semibold text-red-700 hover:bg-red-200 hover:text-red-900"
                >
                  Ver mais
                </Link>
              </div>


              <div className="rounded-3xl border border-purple-100 bg-pink-100 p-5">
                <h3 className="text-lg font-semibold text-pink-900">
                  Funcionários
                </h3>
                <p className="mt-2 text-gray-700">
                  Gerencie os funcionários da empresa.
                </p>
                <Link
                  href="/adm/funcionarios"
                  className="mt-4 inline-block text-sm font-semibold text-pink-700 hover:bg-pink-200 hover:text-pink-900"
                >
                  Ver mais
                </Link>
              </div>

            </div>
          </div>
        </main>

        <footer className="col-span-2 flex items-center justify-center bg-green-900 text-white rounded-2xl shadow-md">
          <Link href="/login" className="px-6 py-3 hover:text-green-200">
            Voltar ao Login
          </Link>
        </footer>
      </div>
    </div>
  );
}
