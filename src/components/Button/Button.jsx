import { TouchableOpacity, Text } from 'react-native'
import { colors } from '../../global/colors'
import React from 'react'
import { styles } from './ButtonStyles'

const Button = ({ text, onPress, backgroundColor, color }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor ?? colors.dark }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: color ?? colors.ligth }]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button

