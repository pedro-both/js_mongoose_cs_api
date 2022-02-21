const mongoose = require("mongoose");
const LocalSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },


        longitude:{
            type: Number,
            required: true

        }

    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Local", LocalSchema);