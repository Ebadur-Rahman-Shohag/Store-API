const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connectDB");
const productsRouter = require("./routes/productsRoutes");

const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Hello from the serverr");
});

app.use("/api/v1/products", productsRouter);

// port
const port = process.env.PORT || 5000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log("Connected to DB");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
