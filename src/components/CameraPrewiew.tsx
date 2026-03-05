import { CameraView } from "expo-camera";



export default function CameraPreview({camera}: any) {



  return (
    <CameraView
      ref={camera.cameraRef}
      style={{ flex: 1 }}
    />
  );
}