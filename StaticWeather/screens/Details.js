import React, {useEffect, useState} from 'react'
import {View} from 'react-native'
import DateTime from '../screens/DateTime'
import WeatherScroll from '../components/WeatherScroll'
const API_KEY = "f72a62fdc81edb510f24105a177c8fee";
export default function Details() {
    const [data, setData] = useState({});
    
    useEffect(() => {
                fetchFromApi("42.6043", "-70.8912")
            })
    
    const fetchFromApi = (latitude, longitude) => {
        if (latitude && longitude) {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
            setData(data)
            console.log(data)
        })
    }
    }

    return (
        <View style = {{flex: 1}}>    
            <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
            <WeatherScroll />
        </View>
    )
}
