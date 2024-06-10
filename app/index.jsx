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
                        <Text>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text>{title}</Text>
                )}
            />
        </View>
    )
}