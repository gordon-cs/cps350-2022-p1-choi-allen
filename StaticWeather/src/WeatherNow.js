import React, { useState, useEffect, Component } from 'react';
import {
  Text, StyleSheet, View
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { render } from 'react-dom';


/* WeatherNow component gives an overall summary of today's weather
 * at a given location, with a small preview of the next day. All its
 * data comes from props.
 */




export default function Weather(props) {
  let [weather, setWeather] = useState();

  async function getWeather() {
    const netUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/255%20Grapevine%20Rd%2C%20Wenham%2C%20MA%2001984?unitGroup=us&key=F2RBD9PUQCU3TLCX9M4W66JXY&contentType=json";
    const result = await fetch(netUrl);
    const weatherJson = result.ok ? await result.json() : [{text: ""}];
    console.log("weatherJson: "); //DBG
    console.log(weatherJson);     //DBG
    setWeather(weatherJson[0]);
  }

  React.useEffect(() => {
    getWeather();

  }, []);
  return(
    <Text>{weather ? weather.text : ""}</Text>
    
  );
}

class WeatherToday extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Location location = {this.props.location}
                  locations = {this.props.locations}
                  onLocationChange = {this.props.onLocationChange}
                  />
        <Today isLoading = {this.props.isLoading}
               weatherData = {this.props.weatherData}
               />
      </View>
    );
  }
}

class Location extends Component {

  render() {
    return (
      <View style={{
              flex: 1,
              backgroundColor: 'steelblue',
              justifyContent: 'center',
            }}>
        <View style={{
                flexDirection: 'row',
              }}>
          <Text style={{flex: 1}}>   </Text>
          <Picker
            selectedValue = { this.props.location }
            onValueChange = {this.props.onLocationChange}
            mode = 'dropdown'
            style = {{
              flex: 2,
              color: 'white',
            }}
            >
            <Picker.Item label = {this.props.locations['wenham'].name}
                         value = 'wenham' />
            <Picker.Item label = {this.props.locations['alcatraz'].name}
                         value = 'alcatraz' />
          </Picker>
          <Text style={{flex: 1}}>   </Text>
        </View>
      </View>
    );
  }
}

class Today extends Component {
  render() {
    let temperature = -5000;
    if ( ! this.props.isLoading) {
      temperature = this.props.weatherData.currently.temperature;
    }
    return (
      <View style={{
              flex: 8,
              backgroundColor: 'powderblue',
              justifyContent: 'center',
              alignItems: 'stretch'
            }}>
        <Text style={{textAlign: 'center', fontSize: 25}}>
          {"Currently\n"}
          <Temperature
            temperature = {temperature}
            units = 'F'
            color = 'black'
            fontSize = {80}
            fontWeigth = 'bold'
            />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 60,
    height:1000,
    backgroundColor: 'plum',
    opacity: .7 

  },

  blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red: {
    color: 'red',
    fontSize: 30,
    marginTop: 14
  },
  aqua: {
    color: 'aqua',
    fontSize: 30,
    marginTop: 34,
    fontStyle: 'italic'
  },
  purple: {
    color: 'purple',
    fontSize: 40,
    marginTop: 44,
    fontStyle: 'italic'
  },
  gold: {
    color: 'gold',
    fontSize: 40,
    fontStyle: 'italic'
  }

});


