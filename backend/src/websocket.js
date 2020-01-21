const socketio = require("socket.io");
const calculateDistance = require("./utils/calculateDistance");
const parseStringAsArray = require("./utils/parseStringAsArray");

const connections = [];

let io;

exports.setupWebSocket = server => {
    io = socketio(server);
    io.on("connection", socket => {
        const { latitude, longitude, techs } = socket.handshake.query;
        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringAsArray(techs)
        });
        console.log("sim, deu bom");
    });
};

exports.filterConnections = (coordinates, techs) => {
    techs = techs.map(item => item.toLowerCase());
    return connections.filter(
        connection =>
            calculateDistance(coordinates, connection.coordinates) &&
            connection.techs.some(item => techs.includes(item.toLowerCase()))
    );
};
exports.sendMessage = (connections, message, data) => {
    connections.forEach(connection => {
        io.to(connection.id).emit(message, data);
    });
};
