const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Please provide a price"],
    },
    company: {
        type: String,
        required: [true, "Please provide a company"],
        enum: {
            values: ["ikea", "liddy", "caressa", "marcos"],
            message: "{VALUE} is not supported",
        },
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    isFeatured: {
        type: Boolean,
        default: false,
    }

});

module.exports = mongoose.model("Product", productsSchema);