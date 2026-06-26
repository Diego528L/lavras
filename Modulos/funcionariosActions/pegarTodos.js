"use server"
import { prisma } from '../../lib/prisma.js';

export async function Get_All_Registros() {

    console.log(
        "\x1b[36m%s\x1b[0m",
        'Server Action pegando todos os registros de funcionários...'
    );
    const todosRegistros = await prisma.funcionario.findMany({
        orderBy: {
            nome: 'asc',
        },
    });

    return todosRegistros;

}
