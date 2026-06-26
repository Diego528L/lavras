import Link from "next/link";
import FormClientes from "@/componentes/cliente/formCliente";
import { gravarRegistro as gravarCliente } from "../../Modulos/clienteActions/gravarRegistro.js";

export default function ClientesPage() {
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
                  className="block font-bold rounded-2xl px-4 py-3 text-gray-700 hover:bg-green-100 hover:text-green-900"
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

        <main className="bg-gray-100 rounded-2xl shadow-md p-6">
          <FormClientes />
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
