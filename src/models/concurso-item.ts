import { Document, model, Model, Schema, SchemaTypes } from "mongoose";
import { IConcurso } from "./concurso";

export interface IConcursoItem extends Document {
    nome: string;
    concurso: IConcurso,
}

const ConcursoItemSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    concurso: {
        type: Schema.Types.ObjectId,
        ref: "Concurso" 
    }
});

const ConcursoItem: Model<IConcurso> = model("ConcursoItem", ConcursoItemSchema);

export default ConcursoItem;