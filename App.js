import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { AlertNotificationRoot } from 'react-native-alert-notification'
import { colors } from './src/global/colors'



export default function App() {
  return (
    <AlertNotificationRoot>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Navigator />
      </View>
    </AlertNotificationRoot>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
