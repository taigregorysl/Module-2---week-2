import React from 'react';
import { Text, View, Button } from 'react-native';

export default function About({navigation}){
    return(
        <View>
            <Text>This is About</Text>
            <Text>You are {navigation.getParam('name')}</Text>
            <Button onPress={()=>navigation.goBack()} title="Go Back"></Button>
        </View>
    )
}   