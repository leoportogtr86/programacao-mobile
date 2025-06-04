import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [coins, setCoins] = useState(0);
  const [xp, setXp] = useState(0);
  const [history, setHistory] = useState([]);
  const [avatars, setAvatars] = useState([{ id: 1, unlocked: true }, { id: 2, unlocked: false }]);

  useEffect(() => {
    (async () => {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) setUser(JSON.parse(storedUser));
      const storedCoins = await AsyncStorage.getItem('coins');
      if (storedCoins) setCoins(parseInt(storedCoins, 10));
      const storedXp = await AsyncStorage.getItem('xp');
      if (storedXp) setXp(parseInt(storedXp, 10));
      const storedHistory = await AsyncStorage.getItem('history');
      if (storedHistory) setHistory(JSON.parse(storedHistory));
      const storedAvatars = await AsyncStorage.getItem('avatars');
      if (storedAvatars) setAvatars(JSON.parse(storedAvatars));
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('user', JSON.stringify(user));
    AsyncStorage.setItem('coins', coins.toString());
    AsyncStorage.setItem('xp', xp.toString());
    AsyncStorage.setItem('history', JSON.stringify(history));
    AsyncStorage.setItem('avatars', JSON.stringify(avatars));
  }, [user, coins, xp, history, avatars]);

  return (
    <AppContext.Provider value={{ user, setUser, coins, setCoins, xp, setXp, history, setHistory, avatars, setAvatars }}>
      {children}
    </AppContext.Provider>
  );
}
