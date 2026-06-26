"use server"
import { prisma } from '../../lib/prisma.js';
 
export async function Get_All_Registros() {
 
    console.log(
        "\x1b[36m%s\x1b[0m",
        'Server Action pegando todos os registros ... ${new Date().toLocaleString()}'
    );
    const todosRegistros = await prisma.hospedagem.findMany({
        orderBy:{
            nome:'asc',
        },
    });
   
    return todosRegistros;
   
}