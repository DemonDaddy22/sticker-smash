import { registerRootComponent } from 'expo';
import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World 👋🏼</Text>
      <Link href='/about' style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1E27',
    gap: 16,
  },
  text: {
    color: '#F0F0F0',
  },
  button: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});

registerRootComponent(Index);

export default Index;
