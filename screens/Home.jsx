import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Button from '../components/Button'

const Home = ({ navigation }) => {
  return (


    <View style={styles.home}>
      <Text style={styles.homeText}>Estas en Home!!!</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text>Ir a Login</Text>
      </Pressable>
      <Button text='Login' onPress={() => navigation.navigate('Login')} />
      <Button text='Profile' onPress={() => navigation.navigate('Profile')} />
      <Button text='Register' onPress={() => navigation.navigate('Register')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  home: {
    backgroundColor: 'red',
    flex: 1,
  },
  homeText: {
  }
})