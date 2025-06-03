import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [operation, setOperation] = useState('add');
  const [level, setLevel] = useState('easy');

  const startChallenge = () => {
    navigation.navigate('Challenge', { operation, level });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione a Operação</Text>
      <View style={styles.row}>
        <Button title="+" onPress={() => setOperation('add')} />
        <Button title="-" onPress={() => setOperation('sub')} />
        <Button title="x" onPress={() => setOperation('mul')} />
        <Button title="÷" onPress={() => setOperation('div')} />
      </View>
      <Text style={styles.title}>Nível</Text>
      <View style={styles.row}>
        <Button title="Fácil" onPress={() => setLevel('easy')} />
        <Button title="Médio" onPress={() => setLevel('medium')} />
        <Button title="Difícil" onPress={() => setLevel('hard')} />
      </View>
      <Button title="Iniciar Desafio" onPress={startChallenge} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, marginVertical: 10 },
  row: { flexDirection: 'row', marginBottom: 10 },
});
