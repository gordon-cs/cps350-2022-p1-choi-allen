import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import Future from './Future'
import moment from 'moment-timezone'
const WeatherScroll = ({weatherData}) => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            <CurrentTemp data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
            <Future data = {weatherData}/>
        </ScrollView>
    )
}

const CurrentTemp = ({data}) => {
    const img = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}
    return (        
        <View style = {styles.currentTempContainer}>
            <Image source = {img} style = {styles.image} />
            <View style = {styles.other}>
                <Text style = {styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                <Text style = {styles.temp}>Day: {Math.floor(data.temp.day)}°F</Text>
                <Text style = {styles.temp}>Night: {Math.floor(data.temp.night)}°F</Text>
                
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#7B6198  ",
        padding: 30,
        flex: 0.5,        
    },
    image: {
        width: 150,
        height: 150
    },
    currentTempContainer: {
        flexDirection: "row",
        backgroundColor: "#AB89D2",
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
        fontWeight: "500",
        marginBottom: 15,
        
    },
    temp: {
        fontSize: 16,
        color: "black",
        fontWeight: "400",
        textAlign: "center"
    },
    other: {
        paddingRight: 40,
    }
})

export default WeatherScroll