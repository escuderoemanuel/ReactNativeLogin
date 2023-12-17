import { StyleSheet } from 'react-native'
import { colors } from '../../global/colors'


export const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.dark,
    alignItems: 'center',
    padding: 20,
  },
  homeText: {
    color: colors.ligth,
    fontSize: 24,
  },
  homeButtonsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
  homeButton: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    backgroundColor: colors.ligth,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.dark,
    fontSize: 18,
    textAlign: 'center',

  }
})