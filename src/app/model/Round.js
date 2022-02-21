const mongoose = require("mongoose");
const RoundSchema = new mongoose.Schema(
    {
        numero:{
            type:Number,
            required: true        
        },
        inicio:{
            type: Date,
            required: false
        },
        fim:{
            type: Date,
            required: false
        },
        modo:{
            type: String,
            required: true
        },
        partida:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Partida',
            required: true
        },
        objetivos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Objetivo"
            }
        ]
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Round", RoundSchema);