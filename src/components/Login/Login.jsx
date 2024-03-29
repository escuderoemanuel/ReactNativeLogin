import { useEffect, useState } from 'react'
import { Text, View, TextInput, Pressable } from 'react-native'
import { colors } from '../../global/colors'
import { styles } from './LoginStyles'
import { Dialog, ALERT_TYPE } from 'react-native-alert-notification'
import Button from '../Button/Button'


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(false)



  const handleLogin = () => {
    if (!email || !password) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        theme: 'dark',
        title: 'Error',
        textBody: 'Please fill all the fields',
        button: 'Ok',
        closeOnOverlayTap: false,
      })
      return
    } else {

      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        theme: 'dark',
        title: 'Success',
        textBody: 'Login successful',
        button: 'Ok',
        closeOnOverlayTap: false,
      })
      setEmail('')
      setPassword('')
      setIsLoggedIn(true)
    }
  }

  useEffect(() => {
    // Check if the user is logged in and navigate to the profile page if they are
    console.log('isLoggedIn changed:', isLoggedIn);
    if (isLoggedIn) {
      navigation.navigate('Profile');
    }
  }, [isLoggedIn, navigation]);


  return (
    <View style={styles.login}>

      <View style={styles.formContainer}>
        <Text style={styles.loginText}>User</Text>
        <TextInput style={styles.inputLogin}
          placeholder='user@email.com'
          keyboardType='email-address'
          onChangeText={setEmail}
          value={email}
          editable={!loading}
          autoCapitalize='none'
          autoCorrect={false}
          textContentType='emailAddress'
        />

        <Text style={styles.loginText}>Password</Text>
        <TextInput style={styles.inputLogin}
          placeholder='password'
          onChangeText={setPassword}
          value={password}
          editable={!loading}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry
          textContentType='password'
        />

        <Button style={styles.button} text='Login' backgroundColor={colors.dark} onPress={handleLogin} />


      </View>
    </View>
  )
}

export default Login

