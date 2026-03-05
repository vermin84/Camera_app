
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function CameraScreen(){
    const [cameraMode, setCameraMode] = useState<'photo'|'video'>('photo')
    const navigation  = useNavigation<any>()
    function toggleMode() {
    setCameraMode(prev => prev === 'photo' ? 'video' : 'photo');
  }
    return <View>
        <Text>{`${cameraMode}`} Screen</Text>
        <Pressable onPress={()=>navigation.navigate('Gallery')}><Text>To gallery</Text></Pressable>
        <Pressable onPress={toggleMode}><Text>{cameraMode === "photo" ? 'video' : 'photo' }</Text></Pressable>
    </View>
}