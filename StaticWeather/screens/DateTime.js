import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet } from "react-native";


const WeatherItem = ({title, value, unit}) => {
    return (
        <View style = {styles.WeatherItem}>
            <Text style = {styles.WeatherItemTitle}>{title}</Text>
            <Text style = {styles.WeatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DateTime = (current, lat, lon, timezone) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

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
                    <Text style = {styles.timezone}>{timezone}</Text>
                    <Text style = {styles.latlon}></Text>
                </View>
            </View>
            
            <View>
            <View style = {styles.weatherItemContainer}>
                <WeatherItem title = "Humidity" value = "79" unit = "%"/>
                <WeatherItem title = "Pressure " value = "1000" unit = "hPA"/>
                <WeatherItem title = "Sunrise" value = "05:00" unit = "AM"/>
                <WeatherItem title = "Sunset" value = "06:00" unit = "PM"/>
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
        fontSize: 30,
        color: "black",
        fontWeight: "100",
        textAlign: "center",
        marginTop: 80
    },
    subheading: {
        fontSize: 20,
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
    latlon: {
        fontSize: 15,
        color: "black",
        fontWeight: "700",
        textAlign: "center"
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        borderRadius: 20,
        padding: 10, 
        marginTop: 250,
        right: 200,
        
        
    },
    WeatherItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    WeatherItemTitle: {
        color: "white",
        fontSize: 15,
        fontWeight: "100"
    }
})

export default DateTime