import { StyleSheet } from 'react-native'
import { colors } from '../../global/colors'


export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: colors.ligth,
    borderWidth: 1.5,
    marginVertical: 20,

  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})