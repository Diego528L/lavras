"use server"
import { prisma } from  '../../lib/prisma.js';
 
export async function deletarRegistro(id){
    console.log(
        "\x1b[33m%s\x1b[0m",
       ' Deletando ponto turístico ID:${id}'
    );
    console.log(
         "\x1b[33m%s\x1b[0m",
         '${new Data().toLocaleString()}'
        );
    const pontoTuristicodeletado = await prisma.pontoTuristico.delete({
        where:{
            id,
        },
    });
    if (PontoTuristicodeletado){
    console.log(
        "\x1b[32m%s\x1b[0m",
        'Ponto turístico deletado com sucesso!'
    );  
}else {
    console.log(
    "\x1b[31m%s\x1b[0m",
    'Erro ao deletar ponto turístico!'
);
}
return pontoTuristicodeletado;
}