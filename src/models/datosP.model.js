import mongoose from "mongoose";

const datosPSchema = new mongoose.Schema({
    telefono: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    sexo: {
        type: String,
        required: true,
    },
    cp: {
        type: Number,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
});
export default mongoose.model("DatosP",datosPSchema);