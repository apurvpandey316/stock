const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const app = express();

dotenv.config();
connectDb();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.send("API Running!"));

app.listen(process.env.PORT, console.log("API started listening on PORT 5000"));