
import React from "react";
import { SafeAreaView, StyleSheet, Text, ImageBackground, StatusBar, View, } from "react-native";
import {Feather} from '@expo/vector-icons'

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require("../../assets/city-background.jpg")} style={styles.imageLayout}>
                <Text style={[styles.cityName, styles.cityText]}>London</Text>
                <Text style={[styles.countryName, styles.cityText]}>UK</Text>
                <View>
                    <Feather name="user" color={'red'} size={50}/>
                    <Text>8000</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1.

    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    }

})
export default City