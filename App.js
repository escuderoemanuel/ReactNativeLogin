import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigation/Navigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fda',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
