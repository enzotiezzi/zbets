import { ApostadorController } from "../controllers/apostatdor/apostador.controller";
import { IApostadorController } from "../controllers/apostatdor/iapostador.controller";

export class MainTest {
    private apostadorController: IApostadorController = new ApostadorController(); 

    async run(): Promise<void> {
        const apostador = await this.apostadorController?.adicionarApostador("enzo teste", "14");

        console.log("Nome do apostador: ", apostador?.nome);
        console.log("Quantidade de zcoins: ", apostador?.zcoins);

        const quantidadePosAcrescimo = await this.apostadorController.adicionarZcoins(apostador.id, 200);

        console.log("Quantidade de zcoins: ", quantidadePosAcrescimo);

        const quantidadePosDecrescimo = await this.apostadorController.removerZcoins(apostador.id, 500);

        console.log("Quantidade de zcoins: ", quantidadePosDecrescimo);
    }
}