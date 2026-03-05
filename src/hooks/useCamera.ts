import { CameraView } from "expo-camera";
import { useRef, useState } from "react";
export function useCamera(){
    const cameraRef = useRef<CameraView | null>(null);

  const [mode, setMode] = useState<'photo' | 'video'>('photo');

  function toggleMode() {
    setMode(prev => prev === "photo" ? "video" : "photo");
  }

  async function takePhoto() {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePictureAsync();

    console.log(photo.uri);
  }

  return {
    cameraRef,
    mode,
    toggleMode,
    takePhoto
  };
}