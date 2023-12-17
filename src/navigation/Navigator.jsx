import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Header from '../components/Header/Header';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import LoginScreen from '../screens/LoginScreen';

import Navbar from '../components/Navbar/Navbar';

import { View, StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <View style={styles.container} >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={({ navigation, route }) => ({
            header: () => <Header title={route.name} navigation={navigation} />
          })} >
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Stack.Navigator>
        <Navbar />
      </NavigationContainer>
    </View >
  );

}

export default Navigator;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})