import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';

import Button from '../../component/ui/Button';

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Tela Dashboard</Text>
      <Button
        text="Sair do App"
        backgroundColor='#FF3F4A'
        color='#FFFFFF'
        accessibilityLabel='Sair do App'
        onPress={signOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000021',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24
  }
});