import { Pressable, Text } from "react-native";


export default function CaptureButton({camera}: any){

    return <Pressable onPress={camera.takePhoto}>
        <Text>Capture</Text>
    </Pressable>
}