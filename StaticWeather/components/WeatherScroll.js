import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import Future from './Future'
const WeatherScroll = () => {
    return (
        <ScrollView horizontal = {true} style = {styles.scrollView}>
            <CurrentTemp />
            <Future />
        </ScrollView>
    )
}

const CurrentTemp = () => {

    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    return (
        <View style = {styles.currentTempContainer}>
            <Image source = {img} style = {styles.image} />
            <View style = {styles.other}>
                <Text style = {styles.day}>Sunday</Text>
                <Text style = {styles.temp}>Night - 28&#176;C</Text>
                <Text style = {styles.temp}>Day - 35&#176;C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#18181bcc",
        padding: 30,
        flex: 0.5,
        
    },
    image: {
        width: 150,
        height: 150
    },
    currentTempContainer: {
        flexDirection: "row",
        backgroundColor: "#00000033",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
    },
    day: {
        fontSize: 20,
        color: "white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign: "center",
        borderRadius: 50,
        fontWeight: "200",
        marginBottom: 15,
        
    },
    temp: {
        fontSize: 16,
        color: "white",
        fontWeight: "100",
        textAlign: "center"
    },
    other: {
        paddingRight: 40,
    }
})

export default WeatherScroll