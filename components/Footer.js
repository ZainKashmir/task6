import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/search.png')} />
      </View>
      <View>
        <Image source={require('../assets/line.png')} />
      </View>
      <View>
        <Image source={require('../assets/heart.png')} />
      </View>
      <View>
        <Image source={require('../assets/users.png')} />
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
    marginBottom: 10,
  },
});
