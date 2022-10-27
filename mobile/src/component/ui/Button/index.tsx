import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  text: string;
  backgroundColor: string;
  color: string;
  accessibilityLabel: string;
  onPress?: () => void;
}

export default function Button({ text, backgroundColor, color, accessibilityLabel, onPress }:ButtonProps) {
  const stylesProps = StyleSheet.create({
    backgroundColor: { backgroundColor: backgroundColor },
    color: { color: color }
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      style={[styles.button, stylesProps.backgroundColor]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, stylesProps.color]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 56,
     marginTop: 16,
     borderRadius: 6
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});