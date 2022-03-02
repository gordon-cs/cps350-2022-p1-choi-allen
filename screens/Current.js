import React, {Component} from 'react'
import {View, TextInput, StyleSheet, PermissionsAndroid, Text} from 'react-native'
import DateTime from '../screens/DateTime'
import WeatherScroll from '../components/WeatherScroll'
import Geolocation from "react-native-geolocation-service";
import StarGaze from '../components/StarGaze'
const API_KEY = "f72a62fdc81edb510f24105a177c8fee";

export class Current extends Component {

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
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&exclude=hourly,minutely&units=metric&appid=f72a62fdc81edb510f24105a177c8fee`);
        
        
        const data = await response.json();
        this.setState({
            data: data, 
        });
        }
    };
    render() {
        const {data} = this.state;
        console.log(data)
        if (data != null) {
            return (
                <View style = {{flex: 1, backgroundColor : "#7B6198"}}>
                    <StarGaze weatherData = {data.daily}/>              
                    <View>

                    </View>
                    <DateTime current={data.current} timezone={data.timezone}/>
                    <WeatherScroll weatherData = {data.daily}/>

                </View>
        )
        } else {
         return(
            <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center', backgroundColor: '#7B6198'}}>
            <Text style = {{fontSize: 50, margin: 80, color: 'white'}}>Loading...</Text>
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

export default Current