"use server"
import { prisma } from  '../../lib/prisma.js';
 
export async function deletarRegistro(id){
    console.log(
        "\x1b[33m%s\x1b[0m",
       ' Deletando cliente ID:${id}'
    );
    console.log(
         "\x1b[33m%s\x1b[0m",
         '${new Data().toLocaleString()}'
        );
    const clienteDeletado = await prisma.cliente.delete({
        where:{
            id,
        },
    });
    if (ClienteDeletado){
    console.log(
        "\x1b[32m%s\x1b[0m",
        'Cliente deletado com sucesso!'
    );  
}else {
    console.log(
    "\x1b[31m%s\x1b[0m",
    'Erro ao deletar cliente!'
);
}
return clienteDeletado;
}