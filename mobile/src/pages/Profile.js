import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function Profile({ navigation }) {
    const url = navigation.getParam("url");

    return <WebView style={styles.GitHubPage} source={{ uri: url }} />;
}

const styles = StyleSheet.create({
    GitHubPage: { flex: 1 }
});
