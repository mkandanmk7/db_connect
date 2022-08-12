const cors = require('cors');
const express = require("express");
const db = require('./shared/mongo');

const server = express();
const PORT = 5000;

(async () => {
    server.use(cors("*"));
    server.use(express.json());
    await db.connect();

    server.get("/", (req, res) => {
        res.status(200).send("server is running successfully")
    })

    server.listen(PORT, () => {
        console.log("server is running successfull in ", PORT)
    })

})()