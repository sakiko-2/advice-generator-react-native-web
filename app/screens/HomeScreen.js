import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';


function useFetch() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData()
  }, []);

  function fetchData() {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch(error => setError(error))
  }

  return { data, loading, error, fetchData };
}

export default function HomeScreen() {
  const { data, loading, error, fetchData } = useFetch();

  if (loading) return <Text>loading...</Text>;

  if (error) {
    return <Text>{JSON.stringify(error, null, 2)}</Text>
  }

  const { id, advice } = data.slip;

  return (
    <View style={styles.container}>
      <Card id={id} text={advice} />
      <Button onPress={fetchData}/>
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
