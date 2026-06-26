"use server"
import { prisma } from  '../../lib/prisma.js';
 
export async function deletarRegistro(id){
    console.log(
        "\x1b[33m%s\x1b[0m",
       ' Deletando gastronomia ID:${id}'
    );
    console.log(
         "\x1b[33m%s\x1b[0m",
         '${new Data().toLocaleString()}'
        );
    const gastronomiaDeletada = await prisma.gastronomia.delete({
        where:{
            id,
        },
    });
    if (GastronomiaDeletada){
    console.log(
        "\x1b[32m%s\x1b[0m",
        'Gastronomia deletada com sucesso!'
    );  
}else {
    console.log(
    "\x1b[31m%s\x1b[0m",
    'Erro ao deletar gastronomia!'
);
}
return gastronomiaDeletada;
}