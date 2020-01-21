import socketio from "socket.io-client";

const socket = socketio("https://72b42743.ngrok.io", {
    autoConnect: false
});

function connect(query, onNewDev) {
    socket.io.opts.query = query;
    socket.connect();
}
function subscribeOnNewDev(newDevFunction) {
    socket.on("newdev", onNewDev);
}
function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}
export { connect, disconnect, subscribeOnNewDev };
