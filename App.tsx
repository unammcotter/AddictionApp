import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timmer';

const DATA = {
  timer: 123456789,
  streak: [1234,2341,3412,4123],
}

export default function App() {
  return (
    <View style={styles.container}>
      <Timer interval = {DATA.timer}></Timer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
