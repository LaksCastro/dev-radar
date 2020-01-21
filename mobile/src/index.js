import React from "react";
import { StatusBar, YellowBox } from "react-native";
import Routes from "./routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function App() {
    return (
        <>
            <Routes />
            <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
        </>
    );
}
