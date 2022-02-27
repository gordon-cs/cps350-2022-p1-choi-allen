import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, StatusBar, ScrollView, SafeAreaView} from 'react-native';
import Search from './Search';
import Header from './Header';

export default function Weather({ weatherData, fetchWeatherData }) {

    const { weather,
            visibility,
            weather: [{description, icon}],
            name,
            main: { temp, humidity, feels_like },
            wind: { speed },
            sys: { sunrise, sunset },
    } = weatherData;
    const [{ main }] = weather;
    
    
    return (
        <SafeAreaView style={styles.container}>
            
                <Search fetchWeatherData={fetchWeatherData} />
                <ScrollView>
                <View style={{alignItems: 'center' }}>
                    <Text style={styles.title}>{name}</Text>
                    
                </View>
                <View style={styles.current}>
                <Image
                        style={styles.largeIcon}
                        source={{
                        uri: `http://openweathermap.org/img/wn/${icon}@4x.png`,
                        }}
                    />
                    <Text style={styles.currentTemp}>{temp} °C</Text>
                    
                </View>
                <Text style={styles.currentDescription}>Not an ideal day to go stargazing</Text>
                </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7B6198',
      
    },
    info: {
        width: Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    },
    largeIcon: {
        width: 250,
        height: 200,
      },
      current: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
      },
      currentTemp: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      currentDescription: {
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10
      },
      title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black',
      },
});