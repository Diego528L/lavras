"use server"
import { prisma } from  '../../lib/prisma.js';
 
export async function deletarRegistro(id){
    console.log(
        "\x1b[33m%s\x1b[0m",
       ' Deletando hospedagem ID:${id}'
    );
    console.log(
         "\x1b[33m%s\x1b[0m",
         '${new Data().toLocaleString()}'
        );
    const hospedagemDeletada = await prisma.hospedagem.delete({
        where:{
            id,
        },
    });
    if (HospedagemDeletada){
    console.log(
        "\x1b[32m%s\x1b[0m",
        'Hospedagem deletada com sucesso!'
    );  
}else {
    console.log(
    "\x1b[31m%s\x1b[0m",
    'Erro ao deletar hospedagem!'
);
}
return hospedagemDeletada;
}