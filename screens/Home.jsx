import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
const Home = ({ navigation }) => {
  return (


    <View style={styles.home}>
      <Text style={styles.homeText}>Estas en Home!!!</Text>
    </View >
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