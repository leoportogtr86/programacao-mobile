import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function HistoryScreen() {
  const { history } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>
      <FlatList
        data={history}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item }) => (
          <Text>{item.question} - {item.correct ? 'Correto' : 'Errado'}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10, textAlign: 'center' },
});
