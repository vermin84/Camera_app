
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export default function CameraScreen(){
    const navigation  = useNavigation<any>()
    return <View>
        <Text>Camera Screen</Text>
        <Pressable onPress={()=>navigation.navigate('Gallery')}><Text>To gallery</Text></Pressable>
    </View>
}