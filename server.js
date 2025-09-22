const express = require("express");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from the server");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});