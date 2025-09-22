const Product = require("../models/productsModel");
const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({ msg: "Success", products });
}

const getStaticProducts = async (req, res) => {
    res.status(200).json({ msg: "get static products" });
}

module.exports = { getAllProducts, getStaticProducts };