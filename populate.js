const mongoose = require("mongoose");
require("dotenv").config()

const products = require("./products.json");
const Product = require("./models/productsModel");
const connectDB = require("./db/connectDB");

const populateProducts = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        await Product.deleteMany();
        await Product.create(products);
        console.log("Success");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
populateProducts();
