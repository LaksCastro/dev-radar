import React from "react";

import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function Main() {
    return (
        <SafeAreaView style={styles.AppContainer}>
            <Text>Testando pra ver se deu bom</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    AppContainer: {
        flex: 1
    }
});
