import React, { useState, useEffect } from "react";
import api from "../services/api";
import MapView from "react-native-maps";
import {
    requestPermissionsAsync,
    getCurrentPositionAsync
} from "expo-location";

import DevMarker from "../components/DevMarker/index";
import FormSearch from "../components/FormSearch/index";
import { connect, disconnect, subscribeOnNewDev } from "../services/socket";
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
    const [devs, setDevs] = useState([]);
    const [techs, setTechs] = useState("");
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

    function setupWebSocket() {
        disconnect();
        const { latitude, longitude } = currentPosition;
        connect({
            latitude,
            longitude,
            techs
        });
        subscribeOnNewDev(newDev => {
            setDevs([...devs, newDev]);
        });
    }
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
        setupWebSocket();
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
                    <DevMarker
                        onProfileClick={() =>
                            handleOpenProfile(dev.github_username)
                        }
                        key={dev._id}
                        dev={dev}
                    />
                ))}
            </MapView>

            <FormSearch techs={techs} setTechs={setTechs} onSubmit={loadDevs} />
        </>
    );
}

const styles = StyleSheet.create({
    MapContainer: {
        flex: 1
    }
});
