import { IConcurso } from "../../models/concurso";
import { IConcursoItem } from "../../models/concurso-item";

export interface IConcursoController {
    criarConcurso(nome: string, itens: IConcursoItem[], idDiscord: string): Promise<IConcurso>;
    encerrarConcurso(id: string): Promise<void>;
    buscarConcursoAtivoPorNome(nome: string): Promise<IConcurso | null>;
    definirResultadoDoConcurso(id: string, idConcursoItem: string): Promise<void>;
    listarConcursosAtivos(): Promise<IConcurso[]>;
}