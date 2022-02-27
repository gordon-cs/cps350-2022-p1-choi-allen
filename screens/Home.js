import React from "react"
import { View, Button, Text } from "react-native"
const Home = ({ navigation }) => {

    return (
        <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center', backgroundColor: '#7B6198', }}>
            <Text style = {{fontSize: 50, margin: 80, color: 'white', fontWeight: 'bold'}}>Night Sky</Text>
            <Button onPress = {() => navigation.navigate('Current')} title = 'Current Location'></Button>
            <Button onPress = {() => navigation.navigate('Location')} title = 'Search City'></Button>
        </View>
    )
}

export default Home