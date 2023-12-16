import { StyleSheet, View } from 'react-native'
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    width: '100%',
    alignItems: 'center',
  },
  navbar: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'pink',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  iconNavbar: {
    color: 'whitesmoke',
    fontSize: 20
  }
})