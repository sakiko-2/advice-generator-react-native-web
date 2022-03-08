import {
  StyleSheet,
  TouchableOpacity,
  View 
} from 'react-native';
import DiceIcon from './DiceIcon';

const Button = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <DiceIcon/>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(150, 100%, 66%)',
    borderRadius: 50,
    width: 64,
    height: 64,
    marginTop: -32
  }
})

export default Button;
