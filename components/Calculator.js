import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleCalc = () => {
    const allowedChars = '123456789+-*/';
    input.split('').forEach((char) => {
      if (!allowedChars.includes(char)) {
        setResult('ERROR');
        return;
      }
    });
    setResult(eval(input));
    setInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Inintuput</Text>
      <Text style={styles.prompt}>{input}</Text>
      <View style={styles.inputBox}>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '3')}>
          <Text>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputFourthButton}
          onPress={() => setInput(input + '+')}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '6')}>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputFourthButton}
          onPress={() => setInput(input + '-')}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '9')}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputFourthButton}
          onPress={() => setInput(input + '*')}>
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput('')}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inputButton} onPress={handleCalc}>
          <Text>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputFourthButton}
          onPress={() => setInput(input + '/')}>
          <Text>÷</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.paragraph}>Relesulut</Text>
      <Text style={styles.paragraph}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 280,
    flexWrap: 'wrap',
  },
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    backgroundColor: 'lightblue',
    borderRadius: 25,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
  },
  inputFourthButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    backgroundColor: 'skyblue',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    marginLeft: 15,
  },
  paragraph: {
    margin: 8,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  prompt: {
    borderWidth: 1,
    borderColor: 'black',
    width: 250,
    fontSize: 16,
    padding: 6,
  },
});
