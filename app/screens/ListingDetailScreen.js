import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItems from '../components/ListItems';

function ListingDetailScreen(props) {
    return (
        <View>
            <Image style={styles.img} resizeMode='contain' source={{uri:"https://picsum.photos/200/300"}} />
            <View style={styles.detailcontainer}>
                <AppText style={styles.title}>Jacket on Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                <ListItems
                    image = {require('../assets/favicon.png')}
                    title = 'heta raj'
                    subTitle='5 listings'
                />
                </View>
            </View>
         
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width: '100%',
        height : 300
    },
    detailcontainer:{
        padding:20,
    },
    title:{
        fontSize: 24,
        fontWeight:'500'
    },
    price:{
        color: colors.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
    },
    userContainer:{
        marginVertical:40
    }
})
export default ListingDetailScreen;