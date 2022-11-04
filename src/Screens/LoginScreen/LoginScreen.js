import React from "react";

import { View, Text, TextInput, Pressable } from 'react-native';
import LoginStyle from "./LoginStyle";

const LoginScreen = ({navigation}) => {
   const gotoDashboard= () =>{
    navigation.navigate('Dashboard')

   }

    return (
        <View style={LoginStyle.container}>
            <Text style={LoginStyle.title}>Login</Text>

            <View style={LoginStyle.miniContainer}>
                <View style={LoginStyle.arrange}>
                    <Text style={LoginStyle.label}>Email:</Text>
                    <TextInput placeholder="  example@gmail.com"  style={LoginStyle.textinput}/>
                </View>

                <View style={LoginStyle.arrange}>
                    <Text style={LoginStyle.label}>Password:</Text>
                    <TextInput placeholder="  ********"  style={LoginStyle.textinput}/>
                </View>
            </View>

            <View style={{alignItems:'center', width: 320, marginVertical: 30,}}>
                <Pressable style={LoginStyle.loginbtn} onPress={gotoDashboard}>
                    <Text style={{color: 'yellow', fontSize: 20,}}>Login</Text>
                </Pressable> 
            </View>

            <View style={{alignItems:'center', width: 320, marginBottom: 20,}}>
                <Text style={{fontSize: 20,fontStyle:'italic'}}>Don't have an account?</Text>

                <Pressable style={{marginVertical: 10,}}>
                    <Text style={{color: 'red', fontSize: 20,}}>Register</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default LoginScreen;