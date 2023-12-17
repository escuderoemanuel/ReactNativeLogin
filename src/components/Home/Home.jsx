import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './HomeStyles'

const Home = ({ navigation }) => {

  return (
    <View style={styles.home}>
      <Text style={styles.homeText}>Home</Text>

      <View style={styles.homeButtonsContainer}>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Register')} >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home
