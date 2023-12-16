import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Soy Home!!!</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text>Ir a Login</Text>
      </Pressable>
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
    color: 'orange',
  }
})