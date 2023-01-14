const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const stockRoutes = require("./routes/stockRoutes");
const app = express();

dotenv.config();
connectDb();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => res.send("API Running!"));

app.use('/api/user', userRoutes);
app.use('/api/stock', stockRoutes);


app.listen(process.env.PORT, console.log(`API started listening on PORT ${process.env.PORT}`));