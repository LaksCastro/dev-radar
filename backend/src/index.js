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

app.listen(process.env.PORT);

if (process.env.DEVELOPMENT) {
    const ngrok = require("ngrok");
    (async function() {
        try {
            const url = await ngrok.connect({
                proto: "http",
                addr: process.env.PORT
            });
            console.log("Tunnel Created -> ");
            console.log(url);
            console.log("Tunnel Inspector ->  http://127.0.0.1:4040");
        } catch (error) {
            console.log(error);
        }
    })();
}
