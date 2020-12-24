import React from 'react';
import { View , StyleSheet,FlatList} from 'react-native';
import ListItems from '../components/ListItems';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';

const menuItems =[
    {
        title:'My Listings',
        icon :{
            backgroundColor: colors.primary,
            name: 'format-list-bulleted'
        }
    },
    {
        title:'My Messages',
        icon :{
            backgroundColor: colors.secondary,
            name: 'email'
        }
    }
]
function AccountScreen(props) {
    return (
       <Screen style={styles.screen}>
       <View style={styles.container}>
           <ListItems 
            title= 'Heta Raj'
            subTitle ='heta.vhminfotech@gmail.com'
            image={require('../assets/favicon.png')}
           />
        </View>
        <View style={styles.container}>
           <FlatList
               data={menuItems}
               keyExtractor={(menuItems)=>menuItems.title}
               ItemSeparatorComponent = {ListItemSeperator}
               renderItem={({item})=>
                (<ListItems 
                    title={item.title}
                    IconComponent={
                        <Icon 
                        name={item.icon.name} 
                        backgroundColor={item.icon.backgroundColor}
                        />
                    }
                />)
               }
           />
        </View>
       <ListItems
           title='logout'
           IconComponent={ 
           <Icon 
            name='logout' 
            backgroundColor = 'blue' 
            />
           }
       />
       </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:colors.light,
    }
})

export default AccountScreen;