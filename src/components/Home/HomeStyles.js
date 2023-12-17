import { StyleSheet } from 'react-native'
import { colors } from '../../global/colors'


export const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.dark,
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
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.dark,
    fontSize: 18,
    textAlign: 'center',
  },
  /*  image: {
     flex: 1,
     resizeMode: "cover",
     justifyContent: "center",
     alignItems: "center",
   } */
})