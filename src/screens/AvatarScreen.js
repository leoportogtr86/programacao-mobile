import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function AvatarScreen() {
  const { avatars, setAvatars, coins } = useContext(AppContext);

  const unlockAvatar = (id) => {
    if (coins >= 10) {
      setAvatars(avatars.map(a => a.id === id ? { ...a, unlocked: true } : a));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu Avatar</Text>
      <FlatList
        data={avatars}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.avatarItem}>
            <Text>Avatar {item.id}</Text>
            {item.unlocked ? <Text>Desbloqueado</Text> : <Button title="Desbloquear" onPress={() => unlockAvatar(item.id)} />}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 10, textAlign: 'center' },
  avatarItem: { padding: 10, borderWidth: 1, marginBottom: 5 },
});
