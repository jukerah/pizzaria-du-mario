import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function Input({ ...rest }) {
  return (
    <TextInput
      {...rest}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontSize: 16,
    width: '100%',
    height: 56,
    paddingHorizontal: 16,
    marginTop: 16,
    borderRadius: 6
  }
});