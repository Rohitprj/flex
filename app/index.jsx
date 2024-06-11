// import { View, Text, SectionList,ScrollView} from 'react-native'
// import React from 'react'

// export default function App() {
//     const Data = [
//         {
//             title: 'Sports',
//             data: ['Cricket', 'Football', 'Chess', 'Hockey']
//         },
//         {
//             title: 'Players',
//             data: ['Virat', 'Rohit', 'Hardik', 'Rinku']
//         }
//     ]
//     return (
//         <ScrollView>
//             <SectionList
//                 sections={Data}
//                 keyExtractor={(item, index) => item + index}
//                 renderItem={({ item,index }) => (
//                     <View>
//                         {/* <Text>{index}</Text> */}
//                         <Text style={{color:"red",fontSize:30,borderColor:"blue",height:50,width:120,borderWidth:4,marginTop:8,marginLeft:8}}>{item}</Text>
//                     </View>
//                 )}
//                 renderSectionHeader={({ section: { title } }) => (
//                     <Text style={{color:"blue",fontSize:40,borderColor:"red",height:70,width:140,borderWidth:4}}>{title}</Text>
//                 )}
//             />
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum labore, adipisci, ex ipsum, enim ad maiores repellat nam quisquam ut a nihil cum. Sequi asperiores, consectetur tempore fugiat maiores porro sint dolor ut, autem voluptates sapiente fuga pariatur nam itaque velit modi aliquam libero odit! Ea ex veritatis modi.</Text>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum labore, adipisci, ex ipsum, enim ad maiores repellat nam quisquam ut a nihil cum. Sequi asperiores, consectetur tempore fugiat maiores porro sint dolor ut, autem voluptates sapiente fuga pariatur nam itaque velit modi aliquam libero odit! Ea ex veritatis modi.</Text>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum labore, adipisci, ex ipsum, enim ad maiores repellat nam quisquam ut a nihil cum. Sequi asperiores, consectetur tempore fugiat maiores porro sint dolor ut, autem voluptates sapiente fuga pariatur nam itaque velit modi aliquam libero odit! Ea ex veritatis modi.</Text>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum labore, adipisci, ex ipsum, enim ad maiores repellat nam quisquam ut a nihil cum. Sequi asperiores, consectetur tempore fugiat maiores porro sint dolor ut, autem voluptates sapiente fuga pariatur nam itaque velit modi aliquam libero odit! Ea ex veritatis modi.</Text>
//             <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum labore, adipisci, ex ipsum, enim ad maiores repellat nam quisquam ut a nihil cum. Sequi asperiores, consectetur tempore fugiat maiores porro sint dolor ut, autem voluptates sapiente fuga pariatur nam itaque velit modi aliquam libero odit! Ea ex veritatis modi.</Text>
//         </ScrollView>
//     )
// }

import { useState } from 'react'
import { View, Text } from 'react-native'

export default function App() {
    const [image, setImage] = useState("")

    async function fetchData() {
        try {
            const data = await fetch("https://dog.ceo/api/breeds/image/random")
            const response = await data.json();

            console.log(response)


            if (response.status === "success") {
                setImage(response.message);
            }
            console.log(response)
        }
        catch (error) {
            console.log(error);
        }
    }
    fetchData();

    return (
        <View style={{
            backgroundColor: "orange",
            width: 200,
            height: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            {Image}
            <img src='image' />
            <Text>Show</Text>
        </View>
    )
}