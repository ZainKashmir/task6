import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import ContactList from './components/ContactList';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ContactList />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
