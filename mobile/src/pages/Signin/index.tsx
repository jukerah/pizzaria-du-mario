import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';

import Input from '../../component/ui/TextField';
import Button from '../../component/ui/Button';

export default function SignIn() {
  const { signIn } = useContext(AuthContext);
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  async function handleLogin() {
    if (email === '' || password === '') {
      return;
    }

    await signIn({ email, password });
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />

      <View style={styles.containerInput}>
        <Input
          placeholder="Digite seu email"
          accessibilityLabel="Digite seu email"
          value={email}
          onChangeText={(text: string) => setEmail(text.toLowerCase())}
        />

        <Input
          placeholder="Digite sua senha"
          accessibilityLabel="Digite sua senha"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <Button
          text="Acessar"
          backgroundColor="#45FFB1"
          color="#000000"
          accessibilityLabel="Botão para acessar sua conta"
          onPress={handleLogin}
        />
      </View>
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
  },
  logo: {
    width: 300,
    height: 45,
    marginBottom: 24
  },
  containerInput: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});