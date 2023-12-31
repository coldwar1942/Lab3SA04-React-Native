import Weather from './Components/Weather.js'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
 
  return (
  <View style={styles.container}>
  <Weather zipCode="90110"/>
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

