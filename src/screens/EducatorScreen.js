import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function EducatorScreen() {
  const { history } = useContext(AppContext);

  const correctCount = history.filter(h => h.correct).length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel do Educador</Text>
      <Text>Total de questões respondidas: {history.length}</Text>
      <Text>Acertos: {correctCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10, textAlign: 'center' },
});
