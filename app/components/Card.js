import {
  useWindowDimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Divider from './Divider';

const Card = ({ id, text }) => {
  const window = useWindowDimensions();

  return (
    <View style={window.width >= 500 ? styles.container : styles.containerMobile}>
      <Text style={styles.title}>ADVICE #{id}</Text>
      <Text style={styles.text}>“{text}”</Text>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(217, 19% , 38%)',
    borderRadius: 10,
    maxWidth: 500,
    marginHorizontal: 10,
    paddingHorizontal: 44,
    paddingVertical: 52
  },
  containerMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'hsl(217, 19% , 38%)',
    borderRadius: 10,
    maxWidth: '92%',
    marginHorizontal: 10,
    paddingHorizontal: 16,
    paddingVertical: 52
  },
  title: {
    color: 'hsl(150, 100%, 66%)',
    fontFamily: 'Manrope_800ExtraBold'
  },
  text: {
    color: '#fff',
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 28
  }
});

export default Card;
