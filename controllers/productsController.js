const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "get all products" });
}

const getStaticProducts = async (req, res) => {
    res.status(200).json({ msg: "get static products" });
}

module.exports = { getAllProducts, getStaticProducts };