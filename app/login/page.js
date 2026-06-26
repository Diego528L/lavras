"use client";
 
import { login } from "../actions/login";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";


 
export default function TelaLogin() {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
 
  async function Logar(e) {
    e.preventDefault();
 
    // validando se tem o email e a senha definidos
    if (email && senha) {
      // pega a resposta da Server Action
      const res = await login(email, senha);
      console.log("Resposta do Servidor", res);
      if (res?.success) {
        console.log("Usuário Autenticado com Sucesso ...");
        console.log("REDIRECIONANDO ...");
        router.push("/adm");
        //router.refresh();
      } else {
        alert("Erro ao Logar verificar com o Adm ");
      }
    } else {
      alert("Favor Informar Email e Senha ");
    }
  }

  function handleSocialLogin(provider) {
    alert(`Continuar com ${provider === "google" ? "Google" : "Facebook"} ainda não está disponível.`);
  }

 return (
  <div
    className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: "url('/imagemfundo.png')" }}
  >
   
      
      {/* Lado Bem-vindo */}
      <div className="w-full md:w-[50%] h-full flex flex-col items-center justify-center text-center gap-3 p-3 md:p-0">

        <img
          className="w-80 h-80 md:w-80 md:h-90"
          src="/museu2.png"
          alt="Museu de Lavras"
        />
      </div>

      {/* Caixa Login */}
      <div className="bg-white w-full md:w-[40%] h-auto md:h-[90%] rounded-4xl flex items-center justify-center shadow-2xl m-4 md:mr-8">
        
        <div className="w-[90%] md:w-[80%] flex flex-col items-center gap-5 p-4 md:p-0">
          
          <form className="w-full flex flex-col gap-3 rounded-lg p-6">
            
            <div className="flex flex-col gap-2 items-center justify-center mb-8 md:mb-12">
              <img
                className="w-12 h-12 md:w-20 md:h-20"
                src="/folha3.svg"
                alt="Museu de Lavras"
              />
              <h2 className="text-xl md:text-4xl font-bold text-center text-green-900">
                Acesse sua conta
              </h2>

              <p className="text-sm md:text-base text-black text-center">
                Entre para Administrar os pontos turísticos, eventos e muito mais!
              </p>
            </div>

            <div className="flex flex-col gap-3 mb-3">
              
              <label htmlFor="email" className="text-left text-base md:text-lg text-black">Email</label>
            <div className="relative flex">   
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" size={18}  />
              <input
                id="email"
                aria-label="Email"
                className="w-full h-10 md:h-12 bg-gray-300 rounded-2xl text-gray-600 outline-none border-0 focus:ring-2 focus:ring-green-900 pl-10 pr-4"
                type="text"
                value={email}
                placeholder="seu.email@dominio.com"
                onChange={(e) => setEmail(e.target.value)}
              />  

              </div>
              </div>
              

           <label htmlFor="senha" className="text-left text-base md:text-lg text-black">Senha</label>
              <div className="relative flex">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600" size={18}  />
              <input
                id="senha"
                aria-label="Senha"
                className="w-full h-10 md:h-12 bg-gray-300 rounded-2xl text-gray-600 outline-none border-0 focus:ring-2 focus:ring-green-900 pl-10 pr-10"
                type={showPassword ? "text" : "password"}
                value={senha}
                placeholder="Digite sua senha"
                onChange={(e) => setSenha(e.target.value)}
              />
              {showPassword ? <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 cursor-pointer" size={18} onClick={() => setShowPassword(false)} /> : <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 cursor-pointer" size={18} onClick={() => setShowPassword(true)} />}
              </div>
             

            <div className="flex items-end mb-5 justify-end gap-2 pr-2">

              <input type="checkbox" id="remember" />

              <label
                htmlFor="remember"
                className="text-sm text-green-950"
              >
                Lembrar senha no próximo acesso
              </label>
            </div>

            <button
              onClick={Logar}
              type="button"
              aria-label="Fazer login"
              className="bg-green-900 hover:bg-green-950 text-white font-bold w-full h-10 md:h-12 rounded-2xl transition-all duration-300 cursor-pointer"
            >
              Entrar
            </button>

            <Link
              href="/"
              className="flex items-center justify-center bg-green-900 hover:bg-green-950 text-white font-bold w-full h-10 md:h-12 rounded-2xl transition-all duration-300"
            >
              Voltar para a página inicial
            </Link>

          </form>

        <p className="text-xs md:text-sm text-gray-500 text-center mb-4">
            © 2026 | Turismo Lavras - MG
            <br />
            Todos os direitos reservados.
          </p>

        </div>
      </div>
    
  </div>
);
}
 