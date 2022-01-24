import React, { Component } from 'react';
import {
  Text, StyleSheet, View
} from 'react-native';

/* WeatherNow component gives an overall summary of today's weather
 * at a given location, with a small preview of the next day. All its
 * data comes from props.
 */


export default class WeatherNow extends Component {
  render() {
    return (
        
        <View style={styles.container}>
        <Text style={styles.blue}>Today in {this.props.weatherData.locationName}: </Text>
        <Text style={styles.red}> {this.props.weatherData.locationTime} </Text>
        <Text style={styles.aqua}> Temperature: {this.props.weatherData.temp} and {this.props.weatherData.sum} </Text>
        <Text style={styles.purple}> {this.props.weatherData.first} </Text>
        <Text style={styles.gold}> {this.props.weatherData.last} </Text>
        </View>
        )
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


