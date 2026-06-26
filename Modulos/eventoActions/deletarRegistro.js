"use server"
import { prisma } from  '../../lib/prisma.js';
 
export async function deletarRegistro(id){
    console.log(
        "\x1b[33m%s\x1b[0m",
       ' Deletando evento ID:${id}'
    );
    console.log(
         "\x1b[33m%s\x1b[0m",
         '${new Data().toLocaleString()}'
        );
    const eventoDeletado = await prisma.evento.delete({
        where:{
            id,
        },
    });
    if (EventoDeletado){
    console.log(
        "\x1b[32m%s\x1b[0m",
        'Evento deletado com sucesso!'
    );  
}else {
    console.log(
    "\x1b[31m%s\x1b[0m",
    'Erro ao deletar evento!'
);
}
return eventoDeletado;
}