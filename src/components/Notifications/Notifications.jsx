import { Text, View } from 'react-native'
import { styles } from './NotificationsStyles'

const Notifications = () => {
  return (
    <View style={styles.notifications}>
      <Text style={styles.notificationsText}>Notifications</Text>
    </View>
  )
}

export default Notifications

