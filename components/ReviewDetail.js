import React from 'react';
import {Text, View, FlatList} from 'react-native';

export default function ReviewDetail(){
    return(
        <View>
           <FlatList
           data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
           ]}
           renderItem={({item})=><Text>{item.key}</Text>}
           />
        </View>
    )
}