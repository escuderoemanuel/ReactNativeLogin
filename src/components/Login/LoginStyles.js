import { StyleSheet } from 'react-native'
import { colors } from '../../global/colors'

export const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: colors.dark,
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '80%',
    marginTop: 50,
  },
  loginText: {
    color: colors.ligth,
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'right',
  },
  inputLogin: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    marginBottom: 25,
    borderRadius: 10,
    borderColor: colors.ligth,
    color: colors.gray,
    backgroundColor: colors.ligth,
    textAlign: 'right',
    fontWeight: 'light',
    fontSize: 14,
  },
  button: {
    marginVertical: 50,
  }
})