import { Pressable, Text } from "react-native"


export default function ModeSwitcher({camera}: any){
    
    return <Pressable onPress={camera.toggleMode}>
        <Text>{camera.mode}</Text>
    </Pressable>
}