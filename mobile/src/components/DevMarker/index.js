import React from "react";

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    Image,
    TextInput
} from "react-native";

import { Marker, Callout } from "react-native-maps";

export default function DevMarker({ dev, onProfileClick }) {
    return (
        <Marker
            key={dev._id}
            coordinate={{
                latitude: dev.location.coordinates[1],
                longitude: dev.location.coordinates[0]
            }}
        >
            <Image
                style={styles.DevImage}
                source={{
                    uri: dev.avatar_url
                }}
            />
            <Callout style={styles.DevCard} onPress={onProfileClick}>
                <Text style={styles.DevName}>
                    {dev.name || dev.github_username}
                </Text>
                <Text style={dev.bio ? styles.DevBio : styles.DevNullBio}>
                    {dev.bio || "Este usuário não tem nada a dizer..."}
                </Text>
                <Text style={styles.DevTechs}>{dev.techs.toString()}</Text>
            </Callout>
        </Marker>
    );
}

const styles = StyleSheet.create({
    DevCard: {
        width: 260,
        padding: 4
    },
    DevImage: {
        width: 45,
        height: 45,
        borderRadius: 8
    },
    DevName: {
        fontWeight: "bold"
    },
    DevBio: {
        color: "#777",
        marginTop: 8,
        marginBottom: 8
    },
    DevNullBio: {
        color: "#d3d3d3",
        marginTop: 8,
        marginBottom: 8
    },
    DevTechs: {}
});
