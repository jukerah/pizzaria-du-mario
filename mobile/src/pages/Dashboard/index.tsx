import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Tela Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000021',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});