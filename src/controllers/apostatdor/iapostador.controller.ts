import { IApostador } from "../../models/apostador";

export interface IApostadorController {
    adicionarApostador(nome: String): Promise<IApostador>;
    adicionarZcoins(id: string, zcoins: number): Promise<number | undefined>;
    removerZcoins(id: string, zcoins: number): Promise<number | undefined>;
    removerApostador(id: string): Promise<void>;
}