import React, { useContext } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./Auth.routes";

import { AuthContext } from "../contexts/AuthContext";

export default function Routes() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return (
    <View style={styles.container}>
      <ActivityIndicator
        size={60}
        color="#45FFB1"
      />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
  
  return (
    isAuthenticated ? <AppRoutes /> : <AuthRoutes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000021',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 22,
    color: '#FFFFFF',
    marginTop: 16
  }
});