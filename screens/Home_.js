import React, {useEffect, useState, Component} from 'react'
import {View, TextInput, StyleSheet, PermissionsAndroid, Text, Button} from 'react-native'
import DateTime from '../screens/DateTime'
import WeatherScroll from '../components/WeatherScroll'
import Geolocation from "react-native-geolocation-service";
const API_KEY = "f72a62fdc81edb510f24105a177c8fee";

export class Home extends Component {

state = {
    lat: null,
    lon: null,
    data: null,
};

    componentDidMount() {
        this.getLocation();
    }

    getLocation = async () => {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    
    if (granted == PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
                this.getWeather();
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }
    };

    getWeather = async() => {
        if (this.state.lat!=null) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=f72a62fdc81edb510f24105a177c8fee`);
        
        
        const data = await response.json();
        this.setState({
            data: data,
            
        });
        }
    };
    render() {
        const {data} = this.state;
        console.log(data);
        if (data != null) {
            return (
                <View style = {{flex: 1, backgroundColor : "#547bba"}}>
                    
                    <TextInput 
                    style = {styles.searchBox}
                    placeholder = "Search"
                    onChangeText={(text) => {
                        
                    }}
                    /> 
                    
                    <View>
                        <Text>{data.main.temp} {data.main.humidity}</Text>
                    </View>
                    <DateTime humidity = {data.humidity} timezone = {data.timezone}/>
                    <WeatherScroll />
                </View>
        )
        } else {
         return(
             <View style = {{flex: 1,
             backgroundColor: "blue",
             }}>
                 <Text style = {styles.title}>Loading!</Text>
             </View>
         )   
        }
    }
}



const styles = StyleSheet.create({
    searchBox: {
        height: 60,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 3,
        borderColor: "black",
        backgroundColor: "white"
    }
});

export default Home