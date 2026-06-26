"use client";
import { useEffect, useState } from "react";
import { gravarRegistro } from "../../Modulos/funcionariosActions/gravarRegistro.js";
import { Get_All_Registros } from "../../Modulos/funcionariosActions/pegarTodos.js";
import ModalEditar from "./modalEditar.js";
import BtnDeletar from "./btnDeletar.js"; 

export default function FormFunc() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [form, setForm] = useState({ nome: "", email: "", celular: "", senha: "" });
  const [status, setStatus] = useState({ message: "", type: "" });

  useEffect(() => {
    Get_All_Registros()
      .then((dados) => {
        if (dados) setFuncionarios(dados);
      })
      .catch((error) => {
        console.error(error);
        setStatus({ message: "Erro ao carregar funcionários.", type: "error" });
      });
  }, []);

  

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.nome || !form.email || !form.celular || !form.senha) {
      setStatus({ message: "Preencha todos os campos!", type: "error" });
      return;
    }
    try {
      const funcionario = {
        nome: form.nome,
        email: form.email,
        celular: form.celular,
        senha: form.senha,
      };

      const res = await gravarRegistro(funcionario);
      if (res?.success) {
        setStatus({ message: "Funcionário cadastrado com sucesso!", type: "success" });
        setForm({ nome: "", email: "", celular: "", senha: "" });
        const dados = await Get_All_Registros();
        setFuncionarios(dados);
      } else {
        setStatus({ message: res?.error || "Erro ao cadastrar", type: "error" });
      }
    } catch (error) {
      setStatus({ message: "Erro ao cadastrar funcionário", type: "error" });
      console.error(error);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8">
      <h1 className="text-2xl font-bold text-green-900 mb-6">Cadastro de Funcionário</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-slate-200 text-black rounded-3xl p-6">
        <div>
          <label htmlFor="nome" className="block font-semibold text-gray-700 mb-2">Nome Completo</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={form.nome}
            onChange={handleInputChange}
            placeholder="Nome completo"
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="seu@email.com"
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="celular" className="block font-semibold text-gray-700 mb-2">Celular</label>
          <input
            id="celular"
            name="celular"
            type="tel"
            value={form.celular}
            onChange={handleInputChange}
            placeholder="(99) 99999-9999"
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="senha" className="block font-semibold text-gray-700 mb-2">Senha</label>
          <input
            id="senha"
            name="senha"
            type="password"
            value={form.senha}
            onChange={handleInputChange}
            placeholder="Senha"
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-900 text-white font-bold rounded-xl px-4 py-3 hover:bg-green-700 transition-colors"
        >
          Cadastrar
        </button>
      </form>

      {status.message && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-4 text-center font-medium ${
            status.type === "success"
              ? "text-green-700"
              : status.type === "error"
              ? "text-red-700"
              : "text-gray-700"
          }`}
        >
          {status.message}
        </p>
      )}

      {funcionarios && funcionarios.length > 0 && (
        <div className="mt-8 rounded-3xl bg-slate-100 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-slate-900">Funcionários cadastrados</h2>

          <div className="overflow-x-auto">
            <table className="w-full table-auto text-black border-collapse rounded-lg bg-slate-200">
              <thead>
                <tr className="bg-slate-300">
                  <th className="border border-slate-400 px-4 py-2 text-left">Nome</th>
                  <th className="border border-slate-400 px-4 py-2 text-left">Email</th>
                  <th className="border border-slate-400 px-4 py-2 text-left">Celular</th>
                  <th className="border border-slate-400 px-4 py-2 text-left">Senha</th>
                  <th className="border border-slate-400 px-4 py-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {funcionarios.map((funcionario) => (
                  <tr key={funcionario.id} className="border-b hover:bg-gray-50 transition">
                    <td className="border border-slate-400 px-4 py-3 text-left">{funcionario.nome}</td>
                    <td className="border border-slate-400 px-4 py-3 text-left">{funcionario.email}</td>
                    <td className="border border-slate-400 px-4 py-3 text-left">{funcionario.celular}</td>
                    <td className="border border-slate-400 px-4 py-3 text-left">{funcionario.senha}</td>
                    <td className="border border-slate-400 px-4 py-3 text-center">
                      <div className="flex justify-center gap-2">
                        <ModalEditar funcionario={funcionario} />
                        <BtnDeletar id={funcionario.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}  

