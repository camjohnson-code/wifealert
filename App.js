import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './Components/Button';
import { useEffect, useState } from 'react';

export default function App() {
  const [isOn, setIsOn] = useState(null);

  useEffect(() => {
    getLightInfo();
  }, []);

  const getLightInfo = () => {
    fetch('https://383e-2601-283-487f-f1cf-2db8-c783-3d42-b872.ngrok-free.app/clip/v2/resource/light/998b5a39-8f99-4da8-94ee-57e29452a2c8', {
      method: 'GET',
      headers: {
        'hue-application-key': 'lJjPUu8z4Nak4dlhg2WR4vNs7gdQWTQIXa1bksQt',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsOn(data.data[0].on);
      })
      .catch((error) => {
        console.error('Error for some reason:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <CustomButton isOn={isOn} setIsOn={setIsOn} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
