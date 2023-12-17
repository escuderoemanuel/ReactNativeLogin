import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { AlertNotificationRoot } from 'react-native-alert-notification'
import Constants from 'expo-constants';
import { colors } from './src/global/colors'


export default function App() {
  return (
    <AlertNotificationRoot>
      <StatusBar style="light" backgroundColor={colors.pink} />
      <View style={styles.container}>
        <Navigator />
      </View>
    </AlertNotificationRoot>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
