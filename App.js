import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { useRef } from 'react'

// You can import supported modules from npm
import { Card } from 'react-native-paper'

// or any files within the Snack
import Calculator from './components/Calculator'

export default function App() {
  const makeATypo = (correctText) => {
    const SWAP_TWO_LETTERS = 0
    const DUPLICATE_LETTER = 1
    const OMIT_LETTER = 2
    const typoType = Math.trunc(Math.random() * 3)
    const textWithTypo = correctText.split('')

    switch (typoType) {
      case SWAP_TWO_LETTERS:
        let charToSwap = Math.trunc(Math.random() * (textWithTypo.length - 1))
        while (textWithTypo[charToSwap] === textWithTypo[charToSwap + 1] && hasDifferentCharacters(textWithTypo)) {
          charToSwap = Math.trunc(Math.random() * (textWithTypo.length - 1))
        }

        const characterToMove = textWithTypo.splice(charToSwap, 1)
        textWithTypo.splice(charToSwap + 1, 0, characterToMove[0])
        return textWithTypo.join('')

      case DUPLICATE_LETTER:
        let charToDuplicate = Math.trunc(Math.random() * (textWithTypo.length))
        while (textWithTypo[charToDuplicate] === textWithTypo[charToDuplicate + 1] && hasDifferentCharacters(textWithTypo)) {
          charToDuplicate = Math.trunc(Math.random() * (textWithTypo.length))
        }

        textWithTypo.splice(charToDuplicate, 0, textWithTypo[charToDuplicate])
        return textWithTypo.join('')

      case OMIT_LETTER:
        let charToDelete = Math.trunc(Math.random() * (textWithTypo.length))
        while (textWithTypo[charToDelete] === textWithTypo[charToDelete + 1] && hasDifferentCharacters(textWithTypo)) {
          charToDelete = Math.trunc(Math.random() * (textWithTypo.length))
        }

        textWithTypo.splice(charToDelete, 1)
        return textWithTypo.join('')
    }
  }

  const hasDifferentCharacters = (stringToCheck) => {
    if (stringToCheck.length) {
      const firstChar = stringToCheck[0]
      for (char of stringToCheck) {
        if (char !== firstChar) {
          return true
        }
      }
      return false
    }
  }

  calculatorText = useRef(makeATypo('Calculator'))

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        {calculatorText.current}
      </Text>
      <Card>
        <Calculator makeATypo={makeATypo} />
      </Card>
      <Text style={styles.version}>Version 1.1.0</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  version: {
    marginTop: 6,
    fontSize: 8,
    color: 'gray',
    textAlign: 'center',
  },
}) 
