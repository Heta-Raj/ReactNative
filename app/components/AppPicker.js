import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Modal, TouchableWithoutFeedback, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AppText from "./AppText";
import defaultStyles from "../config/styles";
import PickerItem from './PickerItem';

function AppPicker({icon,placeholder,items,numberOfColums=1, onSelectedItem,PickerItemComponent= PickerItem, selectedItem,width='100%'}) {
    const [modalVisible, setmodalVisible] = useState(false)
    return (
        <>
        <TouchableWithoutFeedback onPress={()=> setmodalVisible(true)}>
            <View style={[styles.container, {width}]}>
                {icon && <MaterialCommunityIcons 
                    name={icon} 
                    color={defaultStyles.colors.medium} 
                    size={20} 
                    style={styles.icon} 
                    />}
                {selectedItem ? (
                <AppText style={styles.text}>{selectedItem.label}</AppText>
                ) : (
                <AppText style={styles.placeholder}>{placeholder}</AppText>
                ) }
               
                <MaterialCommunityIcons 
                name='chevron-down' 
                color={defaultStyles.colors.medium} 
                size={20} 
                />
            </View>
       </TouchableWithoutFeedback>
       <Modal visible={modalVisible} animationType='slide'>
       <Button title='close' onPress={()=>setmodalVisible(false)}/>
       <FlatList
        data={items}
        numColumns={numberOfColums}
        keyExtractor={item => item.value.toString()}
        renderItem={({item})=> 
        <PickerItemComponent 
            item={item}
            label={item.label}
            onPress={()=>{
                setmodalVisible(false);
                onSelectedItem(item);
            } }
        /> }
       />
       </Modal>
       </>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:'row',
       
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10,
    },
    text:{
        flex:1
    },
    placeholder:{
        color:defaultStyles.colors.medium,
        flex:1
    }
   
})
export default AppPicker;