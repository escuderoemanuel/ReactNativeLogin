import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Login</Text>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  homeText: {
    color: 'orange',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 100,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textDecorationLine: 'underline',
  }
})