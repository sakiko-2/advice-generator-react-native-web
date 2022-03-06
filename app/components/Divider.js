import { StyleSheet } from 'react-native';
import Divider from '../../assets/pattern-divider-mobile.svg';

export default () => 
  <Divider style={styles.divider}/>

const styles = StyleSheet.create({
  divider: {
    width: 400,
    height: 20,
    maxWidth: '100%',
    marginBottom: 16
  }
});
