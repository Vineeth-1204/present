import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

export default function App() {
  const devices = useCameraDevices();
const device = devices.find((d) => d.position === 'back');
 // safe optional chaining to avoid errors

  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    async function requestPermissions() {
      const status = await Camera.requestCameraPermission();
      setHasPermission(
        status.toLowerCase() === 'authorized' || status.toLowerCase() === 'granted'
      );
    }
    requestPermissions();
  }, []);

  if (!device) {
    return <Text>Loading camera devices...</Text>;  // wait until back camera is available
  }

  if (!hasPermission) {
    return <Text>No camera permission</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
