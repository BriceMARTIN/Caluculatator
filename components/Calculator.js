import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useState, useRef } from 'react'

export default function Calculator({ makeATypo }) {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const sr = (square) => {
    return Math.sqrt(square)
  }

  const handleCalc = () => {
    const allowedChars = '1234567890+-*/%^()'
    for (char in input) {
      if (!allowedChars.includes(input[char])) {
        setResult(makeATypo('ERROR'))
        setInput('')
        return
      }
    }
    try {
      setResult(makeATypo(eval(input).toString()))
    } catch {
      setResult(makeATypo('SYNTAX ERROR'))
      return
    }
    setInput('')
  }

  const inputText = useRef(makeATypo('Input'))
  const resultText = useRef(makeATypo('Result'))

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{inputText.current}</Text>
      <Text style={styles.prompt}>{input}</Text>
      <View style={styles.inputBox}>
        {/* √ ^ ² % */}
        <TouchableOpacity
          style={styles.symbolButton}
          /*onPress={() => setInput(input + 'sr(')}*/>
          <Text>{/*√*/}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.symbolButton}
          onPress={() => setInput(input + '**')}>
          <Text>^</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.symbolButton}
          onPress={() => setInput(input + '**2')}>
          <Text>²</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.symbolFourthButton}
          onPress={() => setInput(input + '%')}>
          <Text>%</Text>
        </TouchableOpacity>

        {/* 1 2 3 + */}
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
          style={styles.symbolFourthButton}
          onPress={() => setInput(input + '+')}>
          <Text>+</Text>
        </TouchableOpacity>

        {/* 4 5 6 - */}
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
          style={styles.symbolFourthButton}
          onPress={() => setInput(input + '-')}>
          <Text>-</Text>
        </TouchableOpacity>

        {/* 7 8 9 * */}
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
          style={styles.symbolFourthButton}
          onPress={() => setInput(input + '*')}>
          <Text>*</Text>
        </TouchableOpacity>

        {/* ( 0 ) / */}
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '(')}>
          <Text>(</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + '0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setInput(input + ')')}>
          <Text>)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.symbolFourthButton}
          onPress={() => setInput(input + '/')}>
          <Text>÷</Text>
        </TouchableOpacity>

        {/* C = */}
        <TouchableOpacity
          style={styles.symbolButton}
          onPress={() => setInput('')}>
          <Text>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.symbolButton} onPress={handleCalc}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.paragraph}>{resultText.current}</Text>
      <Text style={styles.paragraph}>{result}</Text>
    </View>
  )
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
  symbolButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    backgroundColor: 'skyblue',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
  },
  symbolFourthButton: {
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
    height: 33,
    fontSize: 16,
    padding: 6,
  },
}) 
