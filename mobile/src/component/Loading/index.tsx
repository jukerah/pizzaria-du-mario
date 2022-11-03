import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size={64} color="#45FFB1"/>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0, 0.7)',
    backdropFilter: 'blur(10px)',
  }
});