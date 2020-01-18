require("dotenv/config");
const express = require("express");
const cors = require("cors");
const app = express();
const mongo = require("mongoose");
const routes = require("./routes");

mongo.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(1111);
