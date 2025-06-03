import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function LoginScreen({ navigation }) {
  const { user, setUser } = useContext(AppContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    setUser({ name, password });
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafio Matemágico</Text>
      <TextInput placeholder="Nome" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '100%', borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 4 },
});
