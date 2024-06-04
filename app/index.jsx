import { Text, View } from 'react-native';

export default function App() {
    return (
        <View style={{
            height: 500,
            width: "100%",
            backgroundColor: "skyblue",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center", // flex-start | center | flex-end 
            // space-evenly | space-between | space-around 

            alignContent: "stretch"   // flex-start | center | flex-end | stretch
            // space-evenly | space-between | space-around 


        }}>
            <View style={{
                height: 80,
                width: 80,
                alignSelf: "center",
                backgroundColor: "silver",
                flexGrow: 2     // flex property
            }}>
                <Text>
                    1
                </Text>

            </View>
            <View style={{
                height: 80,
                width: 80,
                backgroundColor: "red",
                flexGrow: 1       // flex property
            }}>
                <Text>
                    2
                </Text>

            </View>
            <View style={{
                height: 80,
                width: 80,
                backgroundColor: "green"
            }}>
                <Text>
                    3
                </Text>

            </View>
            <View style={{
                height: 80,
                width: 80,
                backgroundColor: "pink"
            }}>
                <Text>
                    4
                </Text>

            </View>
            <View style={{
                height: 80,
                width: 80,
                backgroundColor: "grey"
            }}>
                <Text>
                    5
                </Text>

            </View>
            <View style={{
                height: 80,
                width: 80,
                backgroundColor: "orange"
            }}>
                <Text>
                    6
                </Text>

            </View>

        </View>
    )
}