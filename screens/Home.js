import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
const Home = ({ navigation }) => {

    return (
        <View style = {{flex : 1, justifyContent : 'center', alignItems : 'center', backgroundColor: '#7B6198',}}>
            <Text style = {{fontSize: 50, margin: 80, color: 'white', fontWeight: 'bold'}}>Night Sky</Text>
            <TouchableOpacity onPress = {() => navigation.navigate('Current')} style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>Current location?</Text>
                </TouchableOpacity>
            <View style = {{margin: 15}}>
                <TouchableOpacity onPress = {() => navigation.navigate('Location')} style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>Search location?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        borderRadius:10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#BF9A9A'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20
    }
})
export default Home