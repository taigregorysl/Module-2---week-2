import React,{useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';



export default function Home({ navigation }) {

    const [name,setName] = useState('');

    return (
        
        <View>
            <Text>This is Home</Text>
            <TextInput placeholder="Enter your name" 
            style={{height:40,borderWidth:1,margin:10}}
            value={name}
            onChangeText={val=>setName(val)}
            />
            <Button onPress={() => navigation.push('About',{'name':name})} title="Open About" />
            <Button onPress={() => navigation.push('ReviewDetail')} title="Open Review" />
            <Button onPress={()=> navigation.push('ReviewList')} title="Open Review List"/>
        </View>
    )
}