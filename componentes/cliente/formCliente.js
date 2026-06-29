"use client";
import { useEffect, useState } from "react";
import { gravarRegistro } from "../../Modulos/clienteActions/gravarRegistro.js";
import { Get_All_Registros } from "../../Modulos/clienteActions/pegarTodos.js";
import { atualizarRegistro } from "../../Modulos/clienteActions/editarRegistro.js";

const initialForm = {
  nome: "",
  comentario: "",
  foto: "",
};

export default function FormClientes() {
  const [status, setStatus] = useState({ message: "", type: "" });
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [fotoAtualEdicao, setFotoAtualEdicao] = useState("");

  useEffect(() => {
    Get_All_Registros()
      .then((dados) => {
        if (dados) setClientes(dados);
      })
      .catch((error) => {
        console.error(error);
        setStatus({ message: "Erro ao carregar clientes.", type: "error" });
      });
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    setForm((prev) => ({ ...prev, foto: file || "" }));
  }

  function handleEdit(cliente) {
    setForm({ nome: cliente.nome, comentario: cliente.comentario, foto: cliente.foto || "" });
    setIsEditing(true);
    setEditingId(cliente.id);
    setFotoAtualEdicao(cliente.foto || "");
    setStatus({ message: "", type: "" });
  }

  function handleDelete(id) {
    setClientes((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      handleCancel();
    }
  }

  function handleCancel() {
    setForm(initialForm);
    setIsEditing(false);
    setEditingId(null);
    setFotoAtualEdicao("");
    setStatus({ message: "", type: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { nome, comentario, foto } = form;

    if (!nome || !comentario) {
      setStatus({ message: "Preencha todos os campos antes de cadastrar.", type: "error" });
      return;
    }

    if (isEditing) {
      const payloadEdicao = new FormData();
      payloadEdicao.append("id", String(editingId));
      payloadEdicao.append("nome", nome);
      payloadEdicao.append("comentario", comentario);
      payloadEdicao.append("foto", form.foto || "");
      payloadEdicao.append("fotoAtual", fotoAtualEdicao);

      atualizarRegistro(payloadEdicao)
        .then((res) => {
          if (res?.success) {
            setStatus({ message: "Cliente atualizado com sucesso!", type: "success" });
            handleCancel();
            return Get_All_Registros();
          }
          setStatus({ message: res?.error || "Erro ao atualizar cliente.", type: "error" });
        })
        .then((dados) => {
          if (dados) setClientes(dados);
        })
        .catch((error) => {
          console.error(error);
          setStatus({ message: "Erro ao atualizar cliente.", type: "error" });
        });
      return;
    }

    const payload = new FormData();
    payload.append("nome", form.nome);
    payload.append("comentario", form.comentario);
    payload.append("foto", form.foto || "");

    gravarRegistro(payload)
      .then((res) => {
        if (res?.success) {
          setStatus({ message: "Cliente cadastrado com sucesso!", type: "success" });
          setForm(initialForm);
          return Get_All_Registros();
        }
        setStatus({ message: res?.error || "Erro ao cadastrar cliente.", type: "error" });
      })
      .then((dados) => {
        if (dados) setClientes(dados);
      })
      .catch((error) => {
        console.error(error);
        setStatus({ message: "Erro ao cadastrar cliente.", type: "error" });
      });
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 min-h-screen">
      <h1 className="text-2xl font-bold text-green-900 mb-6">Cadastro de Clientes</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5 bg-slate-200 text-black rounded-3xl p-6">
        <div>
          <label htmlFor="nome" className="block font-semibold text-gray-700 mb-2">
            Nome do Cliente
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={form.nome}
            onChange={handleInputChange}
            placeholder="Nome do cliente"
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="comentario" className="block font-semibold text-gray-700 mb-2">
            Comentário
          </label>
          <input
            id="comentario"
            name="comentario"
            type="text"
            value={form.comentario}
            onChange={handleInputChange}
            placeholder="Comentário do cliente"
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="foto" className="block font-semibold text-gray-700 mb-2">
            Foto
          </label>
          <input
            id="foto"
            name="foto"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {form.foto && (
            <p className="mt-2 text-sm text-gray-600">
              Arquivo selecionado: {typeof form.foto === "string" ? form.foto : form.foto.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="w-full rounded-2xl bg-green-900 text-white font-bold py-3 hover:bg-green-950 transition"
          >
            {isEditing ? "Salvar alterações" : "Cadastrar"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={handleCancel}
              className="w-full rounded-2xl border border-gray-300 text-gray-700 font-bold py-3 hover:bg-gray-100 transition"
            >
              Cancelar edição
            </button>
          )}
        </div>
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

      <div className="mt-8 rounded-3xl bg-slate-100 p-6">
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-black border-collapse rounded-lg bg-slate-200">
          <thead>
            <tr className="bg-slate-300">
              <th className="border border-slate-400 px-4 py-2 text-left">Nome do Cliente</th>
              <th className="border border-slate-400 px-4 py-2 text-left">Comentário</th>
              <th className="border border-slate-400 px-4 py-2 text-left">Foto</th>
              <th className="border border-slate-400 px-4 py-2 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.length === 0 ? (
              <tr>
                <td colSpan="4" className="border border-slate-400 px-4 py-2 text-center text-gray-500">
                  Nenhum cliente cadastrado ainda.
                </td>
              </tr>
            ) : (
              clientes.map((cliente) => (
                <tr key={cliente.id} className="border-b hover:bg-gray-50 transition">
                  <td className="border border-slate-400 px-4 py-2">{cliente.nome}</td>
                  <td className="border border-slate-400 px-4 py-2">{cliente.comentario}</td>
                  <td className="border border-slate-400 px-4 py-2">{cliente.foto || "Sem foto"}</td>
                  <td className="border border-slate-400 px-4 py-2">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(cliente)}
                        className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(cliente.id)}
                        className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
