import { IConcurso } from "../../models/concurso";
import { IConcursoItem } from "../../models/concurso-item";

export interface IConcursoController {
    criarConcurso(nome: string, itens: IConcursoItem[]): Promise<IConcurso>;
    encerrarConcurso(id: string): Promise<void>;
    buscarConcursoAtivoPorNome(nome: string): Promise<IConcurso>;
}