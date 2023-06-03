import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function Logos() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/arrow.png')} />
      </View>
      <View>
        <Image source={require('../assets/logo.png')} />
      </View>
      <View>
        <Image source={require('../assets/basket.png')} />
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
    marginHorizontal: 15,
  },
});
