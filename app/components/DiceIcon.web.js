import { Image, StyleSheet } from 'react-native';

export default () => 
  <Image
    source={
      require('../../assets/icon-dice.svg')
    }
    style={styles.icon}
  />

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});
