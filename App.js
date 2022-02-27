import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import CurrentScreen from './screens/Current'
import LocationScreen from './screens/Location'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Current" component={CurrentScreen} />
        <Stack.Screen name="Location" component ={LocationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack