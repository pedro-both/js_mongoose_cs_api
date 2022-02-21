const mongoose = require("mongoose");
const ResultadoSchema = new mongoose.Schema(
    {
        status:{
            type: String,
            required: true
        },
        objetivo_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Objetivo',
            required: true
        },
        
        round_id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Round',
            required: true
        }
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Resultado", ResultadoSchema);