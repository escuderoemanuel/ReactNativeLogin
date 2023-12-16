import { StyleSheet } from 'react-native';
import { colors } from '../../global/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    width: '100%',
    alignItems: 'center',
  },
  navbar: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.pink,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  iconNavbar: {
    color: colors.ligth,
    fontSize: 20
  }
})