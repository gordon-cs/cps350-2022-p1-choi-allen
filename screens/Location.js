import React, { useState, useEffect } from 'react';
import {View, TextInput, StyleSheet, PermissionsAndroid, Text} from 'react-native'
import Search from '../components/Search'
import Weather from '../components/Weather'
import DateTime from '../screens/DateTime'
import WeatherScroll from '../components/WeatherScroll'
import StarGaze from '../components/StarGaze'
const API_KEY = "f72a62fdc81edb510f24105a177c8fee";

function CityWise() {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(true);

    async function fetchWeatherData(cityName) {
        setLoaded(false);
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
        try {
            const response = await fetch(API);
            if(response.status == 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWeatherData('');
    }, [])
    

    if(!loaded) {
        return (
            <View style={styles.container}>
            </View>

        )
    }

    else if(weatherData === null) {
        return (
            <View style={styles.container}>
                <Search fetchWeatherData={fetchWeatherData}/>
                <Text style={styles.primaryText}>City Not Found</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryText: {
        margin: 20,
        fontSize: 28,
        color: 'black'
    }
  });

export default CityWise