import Apostador, { IApostador } from "../../models/apostador";
import { IApostadorController } from "./iapostador.controller";

export class ApostadorController implements IApostadorController {
    async adicionarApostador(nome: string): Promise<IApostador> {
        const apostador = await Apostador.create({
            nome: nome,
            zcoins: 500,
            dataCriacao: new Date().toISOString(),
        });

        return apostador;
    }

    async adicionarZcoins(id: string, zcoins: number): Promise<number | undefined> {
        const apostador = await Apostador.findById(id);

        if (apostador != undefined) {
            apostador.zcoins += zcoins;

            await apostador.save();
        }

        return apostador?.zcoins;
    }

    async removerZcoins(id: string, zcoins: number): Promise<number | undefined> {
        const apostador = await Apostador.findById(id);

        if (apostador != undefined) {
            apostador.zcoins -= zcoins;

            await apostador.save();
        }

        return apostador?.zcoins;
    }

    async removerApostador(id: string): Promise<void> {
        const apostador = await Apostador.findById(id);

        await apostador?.remove();
    }
}