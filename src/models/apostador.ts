import { Document, model, Model, Schema } from "mongoose";

export interface IApostador extends Document {
    nome: string;
    zcoins: number;
    dataCriacao: string;
}

export const ApostadorSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    zcoins: {
        type: Number,
        required: true
    },
    dataCriacao: {
        type: String,
        required: true
    }
});

const Apostador: Model<IApostador> = model("Apostador", ApostadorSchema);

export default Apostador;