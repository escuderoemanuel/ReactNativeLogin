import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#353535',
    borderRadius: 20,
    borderColor: 'whitesmoke',
    borderWidth: 2,
    margin: 5,

  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'whitesmoke',
    textTransform: 'uppercase',
  }
})