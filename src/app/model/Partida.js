const mongoose = require("mongoose");
const PartidaSchema = new mongoose.Schema(
    {
        inicio: {
            type: String,
            required: true
        },
        fim: {
            type: String,
            required: true
        },
        
        jogador:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Jogador',
            required: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Partida", PartidaSchema);