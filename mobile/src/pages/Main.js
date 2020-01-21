import React, { useState, useEffect } from "react";
import api from "../services/api";
import MapView, { Marker, Callout } from "react-native-maps";
import {
    requestPermissionsAsync,
    getCurrentPositionAsync
} from "expo-location";

import { MaterialIcons } from "@expo/vector-icons";

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button,
    Image,
    TextInput
} from "react-native";

export default function MainScreen({ navigation }) {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [techs, setTechs] = useState("");
    const [devs, setDevs] = useState([]);
    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();
            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });
                const { longitude, latitude } = coords;
                setCurrentPosition({
                    longitude,
                    latitude,
                    longitudeDelta: 0.02,
                    latitudeDelta: 0.02
                });
            }
        }
        loadInitialPosition();
    }, []);
    useEffect(() => {
        if (techs.length) loadDevs();
    }, [currentPosition]);

    async function loadDevs() {
        try {
            const { latitude, longitude } = currentPosition;
            const response = await api.get("/search", {
                params: {
                    latitude,
                    longitude,
                    techs
                }
            });
            setDevs(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    function handleRegionChanged(region) {
        setCurrentPosition(region);
    }

    function handleOpenProfile(github_username) {
        const url = `https://github.com/${github_username}`;
        navigation.navigate("Profile", {
            url
        });
    }

    if (!currentPosition) return null;
    return (
        <>
            <MapView
                onRegionChangeComplete={handleRegionChanged}
                initialRegion={currentPosition}
                style={styles.MapContainer}
            >
                {devs.map(dev => (
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
                        <Callout
                            style={styles.DevCard}
                            onPress={() =>
                                handleOpenProfile(dev.github_username)
                            }
                        >
                            <Text style={styles.DevName}>
                                {dev.name || dev.github_username}
                            </Text>
                            <Text
                                style={
                                    dev.bio ? styles.DevBio : styles.DevNullBio
                                }
                            >
                                {dev.bio ||
                                    "Este usuário não tem nada a dizer..."}
                            </Text>
                            <Text style={styles.DevTechs}>
                                {dev.techs.toString()}
                            </Text>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
            <View style={styles.TechsForm}>
                <TextInput
                    value={techs}
                    onChangeText={text => setTechs(text)}
                    style={styles.TechsInput}
                    placeholder="Procurar Devs por Techs..."
                    placeholderColorText="#777"
                />

                <TouchableOpacity
                    onPress={loadDevs}
                    style={styles.TechsSubmitButton}
                >
                    <MaterialIcons name="my-location" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    MapContainer: {
        flex: 1
    },
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
    DevTechs: {},
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
