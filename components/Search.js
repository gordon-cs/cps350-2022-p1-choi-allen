import React, { useState  } from 'react'
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

export default function Search({ fetchWeatherData }) {

    const [cityName, setCityName] = useState('');

    return (
        <View style={styles.searchBar}>
            <TextInput 
                placeholder='Enter city name or zip code'
                value={cityName}
                onChangeText={(text) => setCityName(text)}
            />
            <TouchableOpacity onPress = {() => fetchWeatherData(cityName)} >
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('screen').width - 20,
        borderWidth: 1.5,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightgray',
        borderColor: 'black'
    }
})