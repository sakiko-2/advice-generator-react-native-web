import { StyleSheet } from 'react-native';
import DiceIcon from '../../assets/icon-dice.svg';

export default () => (
  <DiceIcon style={styles.icon} alt="Dice icon"/>
);
 
const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    height: 24,
    width: 24
  }
});
