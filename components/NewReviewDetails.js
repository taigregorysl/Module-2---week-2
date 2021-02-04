import React from 'react';
import { Text,View} from 'react-native';

export default function ReviewDetail({navigation}){

    const item = navigation.getParam('item')

    return(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.rating}</Text>
            <Text>{item.comment}</Text>
            
        </View>
        )
    }   