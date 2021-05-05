import { model, Model, Schema, Document } from "mongoose";
import { IApostador } from "./apostador";
import { IConcursoItem } from "./concurso-item";

export interface IAposta extends Document {
    apostador: IApostador;
    concursoItem: IConcursoItem;
    apostado: number;
}

const ApostaSchema = new Schema({
    apostador: {
        type: Schema.Types.ObjectId,
        ref: "Apostador",
        required: true
    },
    concursoItem: {
        type: Schema.Types.ObjectId,
        ref: "ConcursoItem",
        required: true
    },
    apostado: {
        type: Number,
        required: true
    }
});


const Aposta: Model<IAposta> = model("Aposta", ApostaSchema);

export default Aposta;