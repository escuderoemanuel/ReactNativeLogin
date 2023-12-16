import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import React from 'react'

const Button = ({ text, onPress, backgroundColor, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor ?? '#212121' }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: color ?? 'whitesmoke' }]}>{text}</Text>
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
    borderRadius: 20,
    borderColor: colors.ligth,
    borderWidth: 1.5,
    margin: 5,

  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})