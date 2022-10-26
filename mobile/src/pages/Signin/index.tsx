import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite seu email"
          accessibilityLabel="Digite seu email"
          style={styles.input}
        />
        <TextInput
          placeholder="Digite sua senha"
          accessibilityLabel="Digite sua senha"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity
          accessibilityLabel="Botão para acessar sua conta"
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Acessar
          </Text>
        </TouchableOpacity>
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
   marginBottom: 40
  },
  containerInput: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    fontSize: 16,
    width: '100%',
    height: 56,

    paddingHorizontal: 16,
    marginTop: 16,
    borderRadius: 6
  },
  text: {
    color: '#FFFFFF'
  },
  button: {
    backgroundColor: '#45FFB1',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 48,
     marginTop: 16,
     borderRadius: 6
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold'
  }
});