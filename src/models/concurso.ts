import { Document, Model, model, Schema } from "mongoose";
import { IConcursoItem } from "./concurso-item";

export interface IConcurso extends Document {
    nome: string;
    dataCriacao: string;
    dataFim: string;
    itens: IConcursoItem[];
    ativo: boolean;
    idDiscord: string;
}

export const ConcursoScheme = new Schema({
    nome: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: String,
        required: true
    },
    dataFim: {
        type: String,
        required: true
    },
    itens: [{
        type: Schema.Types.ObjectId,
        ref: "ConcursoItem"
    }],
    ativo: {
        type: Boolean,
        default: true
    },
    idDiscord: {
        type: String,
        required: true
    }
});

const Concurso: Model<IConcurso> = model("Concurso", ConcursoScheme);

export default Concurso;