import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';


export default function ReviewList({ navigation }) {
    const reviews = [{
        "name": "James",
        "rating": 5,
        "comment": "Very good! I love it"
    },
    {
        "name": "John",
        "rating": 3,
        "comment": "Very good! I love it"

    },
    {
        "name": "Julie",
        "rating": 4,
        "comment": "Nice restaurant"

    }]
    return (
        <View>
            <FlatList
                data={reviews}
                renderItem={({ item }) =>
                <TouchableOpacity onPress={()=>navigation.push('NewReviewDetails',{'item':item})}> 
                    <View style={{height:80,padding:10,backgroundColor:'yellow',margin:5}}>
                        <Text style={{fontSize:30}}>{item.name}</Text>
                        <Text>{item.rating}</Text>
                        <Text>{item.comment}</Text>
                    </View>
                 </TouchableOpacity>
                }
            />
        </View>
    )
}   