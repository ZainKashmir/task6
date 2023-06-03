import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function Logos2() {
  return (
    <View style={styles.container}>
      <View style={styles.textImagecont}>
        <View>
          <Image source={require('../assets/avatar.png')} />
        </View>
        <View>
          <Text style={styles.text}>Edin Adam</Text>
        </View>
      </View>

      <View>
        <Image source={require('../assets/plus.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  text: {
    color: 'black',
    fontSize: 25,
    marginLeft:30,
  },
  textImagecont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
