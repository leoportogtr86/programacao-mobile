import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

function generateQuestion(operation, level) {
  const max = level === 'easy' ? 10 : level === 'medium' ? 20 : 50;
  const a = Math.floor(Math.random() * max);
  const b = Math.floor(Math.random() * max);
  let question = `${a} + ${b}`;
  let answer = a + b;
  if (operation === 'sub') { question = `${a} - ${b}`; answer = a - b; }
  if (operation === 'mul') { question = `${a} x ${b}`; answer = a * b; }
  if (operation === 'div') { question = `${a*b} ÷ ${b}`; answer = a; }
  const options = [answer];
  while (options.length < 4) {
    const opt = answer + Math.floor(Math.random() * 10) - 5;
    if (!options.includes(opt)) options.push(opt);
  }
  return { question, answer, options: options.sort(() => 0.5 - Math.random()) };
}

export default function ChallengeScreen({ route, navigation }) {
  const { operation, level } = route.params;
  const { setCoins, setXp, coins, xp, history, setHistory } = useContext(AppContext);
  const [q, setQ] = useState(generateQuestion(operation, level));
  const [feedback, setFeedback] = useState('');
  const [count, setCount] = useState(0);

  const answer = (opt) => {
    if (opt === q.answer) {
      setFeedback('Correto!');
      setCoins(coins + 1);
      setXp(xp + 1);
    } else {
      setFeedback('Tente novamente.');
    }
    setHistory([...history, { question: q.question, correct: opt === q.answer }]);
    if (count + 1 >= 10) {
      navigation.goBack();
    } else {
      setQ(generateQuestion(operation, level));
      setCount(count + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{q.question}</Text>
      {q.options.map(opt => (
        <Button key={opt} title={String(opt)} onPress={() => answer(opt)} />
      ))}
      <Text>{feedback}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  question: { fontSize: 28, marginBottom: 20 },
});
