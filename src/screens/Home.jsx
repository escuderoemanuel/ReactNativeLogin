import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import { colors } from '../global/colors'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
const Home = ({ navigation }) => {
  return (
    <View style={styles.homeLogin}>
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>User</Text>
        <TextInput style={styles.inputLogin}
          placeholder='user@email.com'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='emailAddress'
          returnKeyType='next'
        />

        <Text style={styles.loginText}>Password</Text>
        <TextInput style={styles.inputLogin}
          placeholder='user@email.com'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='emailAddress'
          returnKeyType='next'
        />
      </View>

      <Button text='Login' backgroundColor={colors.dark} onPress={() => navigation.navigate('Profile')} />
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
    color: colors.dark,
    backgroundColor: colors.ligth,
    textAlign: 'right',
    fontWeight: 'light',
    fontSize: 14,
  }
})