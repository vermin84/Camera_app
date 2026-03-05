
import { useCameraPermissions } from "expo-camera";
import { useNavigation } from "expo-router";
import { Pressable, Text, View } from "react-native";
import CameraPreview from "../components/CameraPrewiew";
import CaptureButton from "../components/CaptureButton";
import ModeSwitcher from "../components/ModeSwitcher";
import { useCamera } from "../hooks/useCamera";

export default function CameraScreen(){
    const camera = useCamera()
    const navigation  = useNavigation<any>()
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission?.granted) {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Camera permission required</Text>

      <Pressable onPress={requestPermission}>
        <Text>Allow camera</Text>
      </Pressable>
    </View>
  
}   
if (!permission?.granted) {
  return <Text>No camera permission</Text>;
}
    return <View style={{ flex: 1 }}>
        <CameraPreview camera={camera}/>
        <View style={{ position: "absolute", bottom: 40, width: "100%", alignItems: "center" }}>

       <Text>TEST BUTTON</Text>
        <Text>{`${camera.mode}`} Screen</Text>
        <Pressable onPress={()=>navigation.navigate('Gallery')}><Text>To gallery</Text></Pressable>
       <ModeSwitcher camera={camera}/>
       <CaptureButton camera={camera}/>
        </View>
    </View>
}