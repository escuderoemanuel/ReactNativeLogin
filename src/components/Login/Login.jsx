import { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { colors } from '../../global/colors'
import Button from '../Button/Button'
import { styles } from './LoginStyles'


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  return (
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

      <Button style={styles.button} text='Login' backgroundColor={colors.dark} onPress={() => navigation.navigate('Profile')} />

    </View>
  )
}

export default Login

