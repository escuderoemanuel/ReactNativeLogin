import { View } from 'react-native'
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './NavbarStyles'

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Entypo style={styles.iconNavbar} name="home" onPress={() => navigation.navigate('Home')} />
        <Ionicons style={styles.iconNavbar} name="person" onPress={() => navigation.navigate('Profile')} />
        <FontAwesome style={styles.iconNavbar} name="plus-square" onPress={() => navigation.navigate('Register')} />
        <Ionicons style={styles.iconNavbar} name="notifications" onPress={() => navigation.navigate('Notifications')} />
        <Ionicons style={styles.iconNavbar} name="settings" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>

  )
}

export default Navbar
