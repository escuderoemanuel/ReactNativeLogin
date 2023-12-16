import { StyleSheet, View } from 'react-native'
import { colors } from '../global/colors'
import Login from '../components/Login/Login'
const Home = ({ navigation }) => {

  return (
    <View style={styles.homeLogin}>
      <Login navigation={navigation} />
    </View >
  )
}

export default Home

const styles = StyleSheet.create({
  homeLogin: {
    flex: 1,
    backgroundColor: colors.dark,
    alignItems: 'center',
    padding: 20,
  },
})