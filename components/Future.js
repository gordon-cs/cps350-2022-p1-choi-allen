import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import moment from 'moment-timezone'
const Future = ({data}) => {
    return (
        <View style={{flexDirection: "row"}}>
            {
                data && data.length > 0 ? 

                data.map((data, idx) => (

                    idx !== 0 &&  <FutureItem key={idx} forecast={data}/>
                ))

                :
                <View/>
            }
        </View>
    )
}

const FutureItem = ({forecast}) => {
    const img = {uri: "http://openweathermap.org/img/wn/"+forecast.weather[0].icon+"@2x.png"}
    return (
        <View style = {styles.futureforecast}>
            <Text  style={styles.day}>{moment(forecast.dt * 1000).format('ddd')}</Text>
            <Image source = {img} style = {styles.image}/>
            <Text style = {styles.temp}>Night - {forecast.temp.night}&#176;C</Text>
            <Text style = {styles.temp}>Day - {forecast.temp.day}&#176;C</Text>
        </View>
    )
}

const styles = StyleSheet.create( {
    image: {
        width: 100,
        height:100
    },
    futureforecast: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#AB89D2",
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
        padding: 20,
        marginLeft: 20
    },
    day: {
        fontSize: 20,
        color: "white",
        backgroundColor: "#3c3c44",
        padding: 10,
        textAlign: "center",
        borderRadius: 50,
        fontWeight: "300",
        marginBottom: -15,
    },
    temp: {
        fontSize: 16,
        color: "black",
        fontWeight: "300",
        textAlign: "center",
    },   
})


export default Future