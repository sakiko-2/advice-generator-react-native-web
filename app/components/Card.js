import {
  useWindowDimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Divider from './Divider';

const Card = () => {
  const window = useWindowDimensions();
  const adviceTitle = 'ADVICE #117';
  const adviceText = `It is easy to sit up and take notice, what's difficult is getting up and taking action.`

  return (
    <View style={window.width >= 500 ? styles.container : styles.containerMobile}>
      <Text style={styles.title}>{adviceTitle}</Text>
      <Text style={styles.text}>{`"${adviceText}"`}</Text>
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
    paddingVertical: 52,
  },
  title: {
    color: 'hsl(150, 100%, 66%)',
    fontFamily: 'Manrope_800ExtraBold'
  },
  text: {
    color: '#fff',
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 28,
    marginVertical: 28,
    textAlign: 'center'
  }
})

export default Card;
