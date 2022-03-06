import {
  Image,
  StyleSheet,
  useWindowDimensions
} from 'react-native';

export default () => {
  const window = useWindowDimensions();

  return (
    <Image
      source = {
        window.width >= 375 ?
        require('../../assets/pattern-divider-desktop.svg') :
        require('../../assets/pattern-divider-mobile.svg')
      }
      style = {
        styles.divider
      } 
    />
   )
}

const styles = StyleSheet.create({
  divider: {
    width: 400,
    height: 20,
    maxWidth: '100%',
    marginBottom: 16
  }
});