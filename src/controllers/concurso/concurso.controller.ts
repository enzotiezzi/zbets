import Concurso, { IConcurso } from "../../models/concurso";
import { IConcursoItem } from "../../models/concurso-item";
import { IConcursoController } from "./iconcurso.controller";

export class ConcursoController implements IConcursoController {
    async criarConcurso(nome: string, itens: IConcursoItem[], idDiscord: string): Promise<IConcurso> {
        const concurso = await Concurso.create({
            nome: nome,
            itens: itens,
            idDiscord: idDiscord,
            ativo: true,
            dataCriacao: new Date().toISOString(),
            dataFim: "",
        });

        return concurso;
    }

    async encerrarConcurso(id: string): Promise<void> {
        const concurso = await Concurso.findById(id);

        if (concurso != null) {
            concurso.ativo = false;
            concurso.dataFim = new Date().toISOString();

            await concurso.save();
        }
    }

    async buscarConcursoAtivoPorNome(nome: string): Promise<IConcurso | null> {
        const concurso = await Concurso.findOne({nome: nome});

        return concurso;
    }

    definirResultadoDoConcurso(id: string, idConcursoItem: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async listarConcursosAtivos(): Promise<IConcurso[]> {
        const concursos = await Concurso.find({ativo: true});

        return concursos;
    }
}