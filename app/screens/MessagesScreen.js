import React, {useState} from 'react';
import { FlatList,StyleSheet, View } from 'react-native';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItems from '../components/ListItems';
import ListItemSeperator from '../components/ListItemSeperator';

import Screen from '../components/Screen';

const initialmessages = [
    {
        id : 1,
        title:'T1',
        description:'D1',
        image : require('../assets/unsplash.jpg')
    },
    {
        id : 2,
        title:'T2',
        description:'D2',
        image : require('../assets/unsplash.jpg')
    }
]
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialmessages);
    const [refreshing, setRefreshing] = useState(false);
    const handleDelete =message=>{
        //delete from array
       
        setMessages(messages.filter((m) => m.id !== message.id));
    }
    return (
        <Screen>
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
            <ListItems 
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log('msg selected', item)}
                renderRightActions={() =>
                <ListItemDeleteAction onPress={() => handleDelete(item)}
                />}
            />}
            
        ItemSeparatorComponent={ListItemSeperator}
        refreshing = {refreshing}
        onRefresh={()=>{
            setMessages([
                {
                    id : 2,
                    title:'T2',
                    description:'D2',
                    image : require('../assets/unsplash.jpg')
                },
            ]);
        }}
        />
        </Screen>
    );
}
const styles = StyleSheet.create({
    
})
export default MessagesScreen;