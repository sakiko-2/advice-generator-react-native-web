import {
  StyleSheet,
  TouchableOpacity,
  View 
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import DiceIcon from './DiceIcon';

const Button = ({ onPress, active }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Shadow
      distance={active ? 20 : 0}
      startColor={'hsla(150, 100%, 50%, .25)'}
      endColor={'hsla(217, 19%, 0%, .1)'}
    >
      <View style={styles.button}>
        <DiceIcon />
      </View>
    </Shadow>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    bottom: 32
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(150, 100%, 66%)',
    borderRadius: 50,
    width: 64,
    height: 64
  }
});

export default Button;
