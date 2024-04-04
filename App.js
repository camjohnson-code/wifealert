import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './Components/Button';
import { useEffect, useState } from 'react';

export default function App() {
  const [isOn, setIsOn] = useState(null);
  const redirectUrl = process.env.EXPO_PUBLIC_REDIRECT_URL;
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;
  const lightId = process.env.EXPO_PUBLIC_LIGHT_ID;

  useEffect(() => {
    getLightInfo();
  }, []);

  const getLightInfo = () => {
    fetch(
      `${redirectUrl}/clip/v2/resource/light/${lightId}`,
      {
        method: 'GET',
        headers: {
          'hue-application-key': apiKey,
        },
      }
    )
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
