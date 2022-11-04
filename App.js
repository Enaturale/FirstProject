import React from "react";

import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen/LoginScreen";
import Dashboard from "./src/Screens/Dashboard/Dashboard";

const App = () => {
  return(
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
       <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
       <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;