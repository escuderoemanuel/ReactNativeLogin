import { Text, View } from 'react-native'
import { styles } from './HeaderStyles'

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

