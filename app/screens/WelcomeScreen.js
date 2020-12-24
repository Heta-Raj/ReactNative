import React from 'react';
import { Image, ImageBackground, StyleSheet, View,Text } from 'react-native';

function WelcomeScreen(props) {
    return (
       <ImageBackground
        style={styles.background}
        //source={require('../assets/splash.png')}
       >
           <View style={styles.logoContainer}>
            <Image 
                style={styles.logo} 
                source={require('../assets/icon.png')} />
            <Text>LOGO</Text>
           </View>
           <View style={styles.loginButton}></View>
           <View style={styles.registerButton}></View>
       </ImageBackground>
    );    
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'flex-end',
        backgroundColor: 'green',
        alignItems: 'center',
    },
    logo:{
        width:100,
        height:100,
       
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    loginButton:{
        width:'100%',
        height:70,
        backgroundColor:'red'
    },
    registerButton:{
        width:'100%',
        height:70,
        backgroundColor:'blue'
    }
  });
export default WelcomeScreen;