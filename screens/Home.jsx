import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
const Home = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Estás en Home!!!</Text>
    </View >
  )
}

export default Home

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#212121',
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  homeText: {
    color: 'white',
  }
})