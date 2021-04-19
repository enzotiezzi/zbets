import { ApostadorController } from "../controllers/apostatdor/apostador.controller";
import { IApostadorController } from "../controllers/apostatdor/iapostador.controller";

export class MainTest {
    private apostadorController: IApostadorController = new ApostadorController(); 

    async run(): Promise<void> {
        const apostador = await this.apostadorController?.adicionarApostador("enzo teste");

        console.log("Nome do apostador: ", apostador?.nome);
        console.log("Quantidade de zcoins: ", apostador?.zcoins);
    }
}