import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';


function useFetch() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .then(() => setActive(false))
      .catch(error => setError(error));
  }

  function handlePress() {
    setActive(true);
    fetchData();
  }

  return { data, loading, active, error, handlePress };
}

export default function HomeScreen() {
  const { data, loading, active, error, handlePress } = useFetch();

  if (loading) return <Text>loading...</Text>;

  if (error) {
    return <Text>{JSON.stringify(error, null, 2)}</Text>
  }

  const { id, advice } = data.slip;

  return (
    <View style={styles.container}>
      <Card id={id} text={advice} />
      <Button active={active} onPress={handlePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(217, 19%, 24%)',
    width: '100%'
  }
});
