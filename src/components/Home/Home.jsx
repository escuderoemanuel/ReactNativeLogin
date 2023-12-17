import { Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'
import { styles } from './HomeStyles'

const Home = ({ navigation }) => {

  /*  const image = 'https://e1.pxfuel.com/desktop-wallpaper/946/194/desktop-wallpaper-flaming-guitar-burning-guitar.jpg' */

  return (
    /*  <ImageBackground source={image} style={styles.image}> */
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
    /* </ImageBackground> */
  )
}

export default Home
