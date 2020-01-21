import React, { useState } from "react";

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    TextInput
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function FormSearch({ onSubmit, techs, setTechs }) {
    return (
        <View style={styles.TechsForm}>
            <TextInput
                value={techs}
                onChangeText={text => setTechs(text)}
                style={styles.TechsInput}
                placeholder="Procurar Devs por Techs..."
                placeholderColorText="#777"
            />
            <TouchableOpacity
                onPress={onSubmit}
                style={styles.TechsSubmitButton}
            >
                <MaterialIcons name="my-location" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    TechsForm: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    TechsInput: {
        flex: 1,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        paddingVertical: 4,
        borderRadius: 25,
        shadowOpacity: 0.2,
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4
        },
        elevation: 2
    },
    TechsSubmitButton: {
        padding: 12,
        borderRadius: 25,
        height: 50,
        width: 50,
        backgroundColor: "#7d40e7",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 12
    }
});
