import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.WeatherItem}>
            <Text style={styles.WeatherItemTitle}>{title}</Text>
            <Text style={styles.WeatherItemTitle}>{value}{unit}</Text>
            
        </View>
    )
}
const DateTime = ({current, lon, timezone, humid}) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    console.log(current);
    console.log(timezone);
    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const AMPM = hour >=12 ? ' PM' : ' AM'

            setTime((hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes) + AMPM) 
            setDate(days[day] + ', ' + date+ ' ' + months[month]) 
        })
    }, [])

    return (
        <View style = {styles.container}>
            <View>
                <View>
                    <Text style = {styles.heading}>{time}</Text>
                    <Text style = {styles.subheading}>{date}</Text>
                    
                </View>
            </View>
            
            <View>
            <View style = {styles.weatherItemContainer}>
                <WeatherItem title = "Humidity:" value = {current.humidity} unit = " %"/>
                <WeatherItem title = "Pressure: " value = {current.pressure} unit = " hPA"/>
                <WeatherItem title = "Sunrise:" value = {current? moment.tz(current.sunrise * 1000, timezone ).format('HH:mm'): ""} unit=" AM"/>
                <WeatherItem title = "Sunset:" value = {current? moment.tz(current.sunset * 1000, timezone ).format('HH:mm'): ""} unit=" PM"/>
            </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        
    },
    heading: {
        fontSize: 50,
        color: "black",
        fontWeight: "300",
        textAlign: "center",
        marginTop: 10,
    },
    subheading: {
        fontSize: 25,
        color: "black",
        fontWeight: "300",
        textAlign: "center"
    
    },
    rightAllign: {
        textAlign: "right",
        marginTop: 20
    },
    timezone: {
        fontSize: 15,
        color: "black",
        textAlign: "center"
    },
    weatherItemContainer: {
        backgroundColor: "#AB89D2",
        borderRadius: 20,
        padding: 15, 
        marginTop: 120,
        right: 190,       
    },
    WeatherItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    WeatherItemTitle: {
        color: "black",
        fontSize: 25,
        fontWeight: "300"
    }
})

export default DateTime