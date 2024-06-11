import { Stack } from 'expo-router'
import {} from 'react-native'
export default function drawer(){
    return(
        <Stack
        screenOptions={{
            headerTintColor:"red"
        }}
        >
            
            <Stack.Screen
            name='Flex-Styles'
            />
            <Stack.Screen
            name='index'
            />
        </Stack>
    )
}