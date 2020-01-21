import React from "react";

import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ProfileScreen({ navigation }) {
    return <View style={styles.ProfileContainer}></View>;
}

const styles = StyleSheet.create({
    ProfileContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 20,
        paddingRight: 20
    }
});
