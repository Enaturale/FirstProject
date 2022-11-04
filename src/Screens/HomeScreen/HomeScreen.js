import React from "react";
import { View, Text, Pressable, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
    const gotoLogin = () => {
        navigation.navigate('Login')

    }

    return (
        <View  style={Styles.container}>
            <Pressable style={Styles.button} onPress={gotoLogin}>
                <Text style={Styles.buttonText}>Continue</Text>
            </Pressable>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:"center",
        alignContent:'center',
        height: 800,
        
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        height: 60,
        borderWidth: 1,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 15,
    },
    buttonText:{
        color:'yellow',
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default HomeScreen;