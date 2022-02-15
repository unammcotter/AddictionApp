import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        //onPress={() => go to relax page
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Relax</Text>
      </TouchableOpacity>
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
    paddingTop:100,
  },
  timer: {
    color: '#0D0D0D',
    fontSize: 70,
    fontWeight: '300',
  }
});
