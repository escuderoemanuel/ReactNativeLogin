import { StyleSheet } from 'react-native'
import { colors } from '../../global/colors'

export const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    backgroundColor: colors.pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: colors.ligth,
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 5
    , fontStyle: 'italic'
  }
}
)