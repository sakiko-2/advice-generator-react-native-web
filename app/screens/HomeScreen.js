import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';

const HomeScreen = () => (
  <View style={styles.container}>
    <Card />
    <Button />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(217, 19%, 24%)',
    width: '100%'
  }
});

export default HomeScreen;
