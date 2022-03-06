import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Manrope_800ExtraBold
} from '@expo-google-fonts/manrope';
import { HomeScreen } from './app/index';

export default function App() {
  let [fontsLoaded] = useFonts({Manrope_800ExtraBold});

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <HomeScreen />
        <StatusBar style = "auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
