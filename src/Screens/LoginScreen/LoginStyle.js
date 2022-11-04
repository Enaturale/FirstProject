import { StyleSheet } from "react-native";

const LoginStyle = StyleSheet.create({
    container:{
        marginVertical: 90,
        marginHorizontal: 30,
        height: 600,
        justifyContent:'center'

    },
    title:{
        fontSize: 35,
        fontWeight: 'bold',
    },
    miniContainer:{
        marginTop: 20,
    },
    arrange:{
        flexDirection:'column',
        width: 310,
        marginBottom: 20,
    },
    label:{
        fontSize: 20,
        color:'black',
        marginBottom: 5,
    },
    textinput:{
        width: 330,
        height: 50,
        borderWidth: 1,  
        borderRadius: 10,  
        fontSize: 20,
    },
    loginbtn:{
        width: 200,
        height: 50,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black'
    }

})

export default LoginStyle;