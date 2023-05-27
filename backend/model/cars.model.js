const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    mileage:{
        type: Number,
        required: true
    },
    color:{
        type: String,
        required: true
    }

})

const CarModel = mongoose.model("cars", carSchema)

module.exports = {CarModel}