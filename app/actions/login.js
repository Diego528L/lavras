"use server";
 
export async function login(nome, senha) {
  console.log("Estou no Servidor....");
 
  if (nome === "admin" && senha === "123") {
    console.log("Dados corretos...");
    console.log(nome, senha);
    return { success: true };
  } else {
    console.log("Dados incorretos...");
    console.log(nome, senha);
    return { success: false };
  }
}
 