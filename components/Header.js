import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logos from './Logos';
import Logos1 from './Logos1';
import Logos2 from './Logos2';

export default function Header() {
  return (
    <View>
      <View style={styles.upperhead}>
        <Logos />
      </View>
      <View style={styles.logo1}>
        <Logos1 />
      </View>
      <View>
        <Logos2 />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  upperhead: {
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: '#BE9F56',
  },
  logo1: {
    marginVertical: 4,
    paddingBottom: 10,
  },
});
