import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {View, Button, Text, StyleSheet} from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text>Home View</Text>
            <Button onPress = {() => navigation.navigate('Details')} title = 'Next Screen'></Button>
        </View>
    )
}

export default Home