require("dotenv/config");
const express = require("express");
const cors = require("cors");
const mongo = require("mongoose");
const http = require("http");
const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);
setupWebSocket(server);

mongo.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT);

//Create a tunnel in development
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
