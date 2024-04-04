import React, { useState } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const CustomButton = () => {
  const [text, setText] = useState('Press me');
  const [disabled, setDisabled] = useState(false);
  let timeoutId = null;

  const handlePressIn = () => {
    setText('Are you sure?');
    timeoutId = setTimeout(() => setText('Are you actually sure?'), 2000);
    timeoutId = setTimeout(() => setText('Ok fine...'), 4000);
    timeoutId = setTimeout(() => {
      setDisabled(true);
      setText('Notifying Cameron...');
    }, 5000);
    timeoutId = setTimeout(() => {
      setText('He\'s been notified');
      setDisabled(false);
    }, 8000);
    timeoutId = setTimeout(() => setText('Press me'), 9500);

  };

  const handlePressOut = () => {
    // setText('Press me');
    clearTimeout(timeoutId);
    // setDisabled(false);
  };

  return (
    <Pressable
      style={[styles.button, disabled && styles.disabledButton]}
      android_ripple={{ color: 'rgba(255, 255, 255, 0.3)' }}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '50%',
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CustomButton;
