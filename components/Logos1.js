import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';

export default function Logos1() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>786 contacts</Text>
      </View>
      <View>
        <Image source={require('../assets/CONTACTS.png')} />
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
    marginHorizontal: 10,
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
});
