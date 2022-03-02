import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
const StarGaze = ({weatherData}) => {
    return (
        <Forecast data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
    )
}

const Forecast = ({data}) => {
    const nightTemp = data.temp.night;
    const border = 10;
    if (nightTemp < 20) {
        return (
            <View style = {styles.starContainer}>
                <Text style = {styles.starGazeContainer}>Tonight is not a good day to go stargazing</Text>
            </View>
        )  
    }
    else {
        return (
            <View style = {styles.starContainer}>
                <Text style = {styles.starGazeContainer}>Tonight is a good day to go stargazing</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    starGazeContainer: {    
        fontSize: 20,
        color: "#2E2E2E",
        fontWeight: "bold",
        textAlign: "center",
    },
    starContainer: {
        backgroundColor: "#AB89D2",
        borderRadius: 40,
        padding: 8, 
        marginTop: 5,
        flex: 0.15
    },
})
export default StarGaze;