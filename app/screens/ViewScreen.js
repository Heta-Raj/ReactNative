import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
function ViewScreen(props) {
    return (
        <View style={styles.container} >
            <View style={styles.closeicon}>
                <MaterialCommunityIcons name='close' color='white' size={30} />
                </View>
            <View style={styles.delicon}>
                <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
                </View>
            <Image resizeMode='contain' style={styles.img} source={{uri:'https://picsum.photos/id/1/200/300'}} />
        </View>
       
    );
}

const styles = StyleSheet.create({
    closeicon:{        
        position:'absolute',
        top:40,
        left:30,
    },
    delicon:{        
        position:'absolute',
        top:40,
        right:30,
    },
    container:{
        backgroundColor:colors.primary,
        flex: 1
    },
    img:{
        width: '100%',
        height: '100%',
    },
});
export default ViewScreen;