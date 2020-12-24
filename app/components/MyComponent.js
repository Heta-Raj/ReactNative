import React from 'react';
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
function MyComponent(props) {
    
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
    <Button title='Select Image' onPress={selectImage} />
    <Image source={{uri: imageUri }} style={{width:200, height:200}} />
  </Screen>    
  ); 
}
export default MyComponent;