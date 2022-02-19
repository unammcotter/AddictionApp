import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import CustomeButton from './components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
        <CustomeButton title="Relax" />        
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
  timer: {
    color: '#0D0D0D',
    fontSize: 70,
    fontWeight: '300',
  }
});
