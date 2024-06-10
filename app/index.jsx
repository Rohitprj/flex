import { View, Text, SectionList } from 'react-native'
import React from 'react'

export default function App() {
    const Data = [
        {
            title: 'Sports',
            data: ['Cricket', 'Football', 'Chess', 'Hockey']
        },
        {
            title: 'Players',
            data: ['Virat', 'Rohit', 'Hardik', 'Rinku']
        }
    ]
    return (
        <View>
            <SectionList
                sections={Data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item,index }) => (
                    <View>
                        {/* <Text>{index}</Text> */}
                        <Text style={{color:"red",fontSize:30,borderColor:"blue",height:50,width:120,borderWidth:4,marginTop:8,marginLeft:8}}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{color:"blue",fontSize:40,borderColor:"red",height:70,width:140,borderWidth:4}}>{title}</Text>
                )}
            />
        </View>
    )
}