import React, { useState, useEffect, useRef } from 'react';
import {
  Animated,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  View,
} from 'react-native';
import { alertCameron } from '../lightHelpers';

const CustomButton = ({
  isOn,
  setIsOn,
}: {
  isOn: boolean;
  setIsOn: Function;
}) => {
  const [text, setText] = useState('Press and hold');
  const [disabled, setDisabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const timeoutId1 = useRef(null);
  const timeoutId2 = useRef(null);
  const timeoutId3 = useRef(null);
  const timeoutId4 = useRef(null);
  const sizeAnim = useRef(new Animated.Value(1)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(115, 25, 99)', 'rgb(41, 112, 69)'],
  });

  const handlePressIn = () => {
    setPressed(true);
    setText('Are you sure?');
    timeoutId1.current = setTimeout(
      () => setText('Are you actually sure?'),
      2000
    );
    timeoutId2.current = setTimeout(() => setText('Ok fine...'), 4000);
    timeoutId3.current = setTimeout(() => {
      alertCameron(setIsOn);
      setDisabled(true);
      setText('Notifying Cameron...');
    }, 5000);
    timeoutId4.current = setTimeout(() => {
      setText("He's been notified!");
      setDisabled(false);
    }, 8000);
    const diagonal = Math.sqrt(
      Math.pow(Dimensions.get('window').width, 2) +
        Math.pow(Dimensions.get('window').height, 2)
    );
    Animated.parallel([
      Animated.timing(sizeAnim, {
        toValue: (diagonal / 200) * 1.1,
        duration: 8000,
        useNativeDriver: true,
      }),
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    setPressed(false);
    clearTimeout(timeoutId1.current);
    clearTimeout(timeoutId2.current);
    clearTimeout(timeoutId3.current);
    clearTimeout(timeoutId4.current);
    Animated.parallel([
      Animated.timing(sizeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(colorAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
    setText('Press me');
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <View
        style={[
          styles.buttonContainer,
          pressed && styles.pressed,
          disabled && styles.disabledButton,
        ]}
      >
        <Animated.View
          style={[
            styles.button,
            { backgroundColor, transform: [{ scale: sizeAnim }] },
          ]}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'rgb(195, 117, 0)',
    padding: 10,
    marginTop: 10,
    width: 200,
    height: 200,
    elevation: 15,
    borderRadius: 250,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 200,
    paddingBottom: 200,
  },
  pressed: {
    elevation: 5,
  },
});

export default CustomButton;
