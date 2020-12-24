import React from 'react';
import { StyleSheet,Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({title, onPress}) {
    return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>  
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary, 
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        width: '100%'
    },
    text:{
        color: colors.white,
        textTransform: 'uppercase',
        fontSize: 10,
        fontWeight:'bold'
    },
})
export default AppButton;