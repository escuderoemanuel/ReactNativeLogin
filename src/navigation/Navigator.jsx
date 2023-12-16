import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Settings from '../screens/Settings';
import Notifications from '../screens/Notifications';

import Navbar from '../components/Navbar';

import { View, StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <View style={styles.container} >
      <NavigationContainer>
        <Stack.Navigator  >
          <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
          <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
          <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
          <Stack.Screen name="Notifications" component={Notifications} options={{ title: 'Notifications' }} />
          <Stack.Screen name="Settings" component={Settings} options={{ title: 'Settings' }} />
        </Stack.Navigator>
        <Navbar />
      </NavigationContainer>
    </View>
  );

}

export default Navigator;


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    flex: 1,
  }
})