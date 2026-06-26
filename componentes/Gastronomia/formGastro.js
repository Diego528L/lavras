"use client";
import { useEffect, useState } from "react";
import { gravarRegistro } from "../../Modulos/gastronomiaActions/gravarRegistro.js";
import { Get_All_Registros } from "../../Modulos/gastronomiaActions/pegarTodos.js";

const initialForm = {
  local: "",
  categoria: "",
  contato: "",
  descricao: "",
  foto: "",
};

export default function FormGastro() {
  const [status, setStatus] = useState({ message: "", type: "" });
  const [gastronomia, setGastronomia] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    Get_All_Registros()
      .then((dados) => {
        if (dados) setGastronomia(dados);
      })
      .catch((error) => {
        console.error(error);
        setStatus({ message: "Erro ao carregar locais.", type: "error" });
      });
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    setForm((prev) => ({ ...prev, foto: file ? file.name : "" }));
  }

  function handleEdit(item) {
    setForm({
      local: item.local,
      categoria: item.categoria,
      contato: item.contato,
      descricao: item.descricao,
      foto: item.foto || "",
    });
    setIsEditing(true);
    setEditingId(item.id);
    setStatus({ message: "", type: "" });
  }

  function handleDelete(id) {
    setGastronomia((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      handleCancel();
    }
  }

  function handleCancel() {
    setForm(initialForm);
    setIsEditing(false);
    setEditingId(null);
    setStatus({ message: "", type: "" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { local, categoria, contato, descricao, foto } = form;

    if (!local || !categoria || !contato || !descricao) {
      setStatus({ message: "Preencha todos os campos antes de cadastrar.", type: "error" });
      return;
    }

    if (isEditing) {
      setGastronomia((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, local, categoria, contato, descricao, foto } : item
        )
      );
      handleCancel();
      setStatus({ message: "Local atualizado com sucesso!", type: "success" });
      return;
    }

    const payload = new FormData();
    payload.append("local", form.local);
    payload.append("categoria", form.categoria);
    payload.append("contato", form.contato);
    payload.append("descricao", form.descricao);
    payload.append("foto", form.foto || "");

    gravarRegistro(payload)
      .then((res) => {
        if (res?.success) {
          setStatus({ message: "Local cadastrado com sucesso!", type: "success" });
          setForm(initialForm);
          return Get_All_Registros();
        }
        setStatus({ message: res?.error || "Erro ao cadastrar local.", type: "error" });
      })
      .then((dados) => {
        if (dados) setGastronomia(dados);
      })
      .catch((error) => {
        console.error(error);
        setStatus({ message: "Erro ao cadastrar local.", type: "error" });
      });
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8">
      <h1 className="text-2xl font-bold text-green-900 mb-6">Cadastro de Locais</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5 bg-slate-200 text-black rounded-3xl p-6">
        <div>
          <label htmlFor="local" className="block font-semibold text-gray-700 mb-2">
            Nome do Local
          </label>
          <input
            id="local"
            name="local"
            type="text"
            value={form.local}
            onChange={handleInputChange}
            placeholder="Nome do local"
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="categoria" className="block font-semibold text-gray-700 mb-2">
            Categoria Principal
          </label>
          <input
            id="categoria"
            name="categoria"
            type="text"
            value={form.categoria}
            onChange={handleInputChange}
            placeholder="Ex: Restaurante, Bar, Café, Padaria, etc."
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="contato" className="block font-semibold text-gray-700 mb-2">
            Contato
          </label>
          <input
            id="contato"
            name="contato"
            type="tel"
            value={form.contato}
            onChange={handleInputChange}
            placeholder="(99) 99999-9999"
            className="w-full text-black rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="descricao" className="block font-semibold text-gray-700 mb-2">
            Descrição do Local
          </label>
          <textarea
            id="descricao"
            name="descricao"
            value={form.descricao}
            onChange={handleInputChange}
            placeholder="Descrição do local"
            rows="4"
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
          {form.foto && <p className="mt-2 text-sm text-gray-600">Arquivo selecionado: {form.foto}</p>}
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
              <th className="border border-slate-400 px-4 py-2 text-left">Nome do Local</th>
              <th className="border border-slate-400 px-4 py-2 text-left">Categoria</th>
              <th className="border border-slate-400 px-4 py-2 text-left">Contato</th>
              <th className="border border-slate-400 px-4 py-2 text-left">Descrição</th>
              <th className="border border-slate-400 px-4 py-2 text-left">Foto</th>
              <th className="border border-slate-400 px-4 py-2 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {gastronomia.length === 0 ? (
              <tr>
                <td colSpan="6" className="border border-slate-400 px-4 py-2 text-center text-gray-500">
                  Nenhum local cadastrado ainda.
                </td>
              </tr>
            ) : (
              gastronomia.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50 transition">
                  <td className="border border-slate-400 px-4 py-2">{item.local}</td>
                  <td className="border border-slate-400 px-4 py-2">{item.categoria}</td>
                  <td className="border border-slate-400 px-4 py-2">{item.contato}</td>
                  <td className="border border-slate-400 px-4 py-2">{item.descricao}</td>
                  <td className="border border-slate-400 px-4 py-2">{item.foto || "Sem foto"}</td>
                  <td className="border border-slate-400 px-4 py-2">
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
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
