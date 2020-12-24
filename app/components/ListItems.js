import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
function ListItems({title, subTitle, image,IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor = {colors.light}
                onPress={onPress}>
            <View style={styles.container}>
                {IconComponent}
               {image && <Image style={styles.img} source={image} />}
                <View style={styles.detailcontainer}>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
                <MaterialCommunityIcons name='chevron-right' size={25} />
            </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:15,
        backgroundColor:colors.white,
        alignItems:'center',
    },
    detailcontainer:{
        marginLeft: 10,
        justifyContent:'center',
        flex:1
    },
    img:{
        width:70,
        height:70,
        borderRadius:35,
        
    },
    title:{
        fontWeight:'500'
    },
    subTitle:{
        color: colors.medium,
    }
})
export default ListItems;