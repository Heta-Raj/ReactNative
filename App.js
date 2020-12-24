import React , { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, Image, SafeAreaView, Button , Alert, Platform, StatusBar, Dimensions, Switch} from 'react-native';
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import ImageInput from './app/components/ImageInput';

export default function App() {

  const [imageUri, setImageUri] = useState()
  const requestPermission =async()=>{
    const {granted} = await ImagePicker.requestCameraPermissionsAsync();
    if(!granted)
      alert('You need to anable permission to access the libraray.');
  } ;
  useEffect(() => {
    requestPermission();
    }, [])
    const selectImage =async()=>{      
      try {
        const result = await ImagePicker.launchImageLibraryAsync();
        if(!result.cancelled)  
          setImageUri(result.uri);
      } catch (error) {
        console.log('Error reading an image',error);
      }
    }
  return (
  <Screen>
    <ImageInput 
      imageUri={imageUri}
      onChangeImage={(uri) => setImageUri(uri)}
      />
  </Screen>    
  ); 
}
//import MessagesScreen from './app/screens/MessagesScreen';
//import ListingEditScreen from './app/screens/ListingEditScreen'
//import RegisterScreen from './app/screens/RegisterScreen';
//import AppText from './app/components/AppText';
//import AppTextInput from './app/components/AppTextInput';
//import AppPicker from './app/components/AppPicker';
//import LoginScreen from './app/screens/LoginScreen';
//import ListItems from './app/components/ListItems';
//<RegisterScreen />
//import Screen from './app/components/Screen';
//import ListItems from './app/components/ListItems';
//import AccountScreen from './app/screens/AccountScreen';
//import ListingScreen from './app/screens/ListingScreen';
//const [IsNew, setIsNew] = useState(false);
//<Screen>     <Switch value={IsNew} onValueChange={(newValue)=> setIsNew(newValue)}></Switch>    </Screen>
//<Screen>   <AppTextInput placehilder='username' icon='email' />  </Screen>
//<Screen><AppPicker selectedItem = {category} onSelectedItem = {item => setCategory(item)} items={categories} icon='apps' placeholder='category'/><AppTextInput icon='email' placeholder='email'/></Screen>
//const categories = [{label: 'Furniture', value:1},{label: 'Clothing', value:2},{label: 'Cameras', value:3},]
//const [category, setCategory] = useState();
//import AppButton from './app/components/AppButton';
//import ViewScreen from './app/screens/ViewScreen';
//import MessagesScreen from './app/screens/MessagesScreen';
//import Icon from './app/components/Icon';
//import Card from './app/components/Card';
//import WelcomeScreen from './app/screens/WelcomeScreen';
//import ViewScreen from './app/screens/ViewScreen';
//import AppText from './app/components/AppText';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
//import ListItems from './app/components/ListItems';
//import ListingDetailScreen from './app/screens/ListingDetailScreen';
//return (<AccountScreen />);
  //return <MessagesScreen />;
  //return <ListingDetailScreen />;
 // console.log(Dimensions.get('screen'));
  //return <WelcomeScreen />;
  //return (<AccountScreen />);
  //<Icon name = 'email' size={50} backgroundColor='red' iconColor='white' />
  //return (<Screen>   <ListItems  title= 'My Title' subTitle='My subtitle' ImageComponent={<Icon name = 'email' size={50} backgroundColor='red' iconColor='white' />} />  </Screen> );
