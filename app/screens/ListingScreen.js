import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
const listings=[
    {
        id:1,
        title:'Laptop with great condition',
        price:100,
        image: require('../assets/amy-unsplash.jpg'),
       
    },
    {
        id:2,
        title:'Jacket for sale',
        price:1000,
        image: require('../assets/unsplash.jpg'),
    },
];
function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor ={listings=> listings.id.toString()}
                renderItem={({item}) => 
                <Card
                    title={item.title}
                    subTitle={item.price}
                    image={item.image}
                    />
                }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
})

export default ListingScreen;