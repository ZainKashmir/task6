import {useEffect, useState, useCallback, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SectionList from 'react-native-tabs-section-list';
import sectionListGetitemLayout from 'react-native-section-list-get-item-layout';

const CONTACTS = [
  {
    title: 'A',
    data: [
      {
        name: 'Alice',
        email: 'alice@example.com',
        phone: '1234567890',
      },
      {
        name: 'Alex',
        email: 'alex@example.com',
        phone: '9876543210',
      },
      {
        name: 'Amy',
        email: 'amy@example.com',
        phone: '5556667777',
      },
      {
        name: 'Adam',
        email: 'adam@example.com',
        phone: '1112223333',
      },
      {
        name: 'Amanda',
        email: 'amanda@example.com',
        phone: '9998887777',
      },
      // More contacts starting with 'A'
    ],
  },
  {
    title: 'B',
    data: [
      {
        name: 'Bob',
        email: 'bob@example.com',
        phone: '1112223333',
      },
      {
        name: 'Beth',
        email: 'beth@example.com',
        phone: '4445556666',
      },
      {
        name: 'Ben',
        email: 'ben@example.com',
        phone: '8889990000',
      },
      {
        name: 'Barbara',
        email: 'barbara@example.com',
        phone: '2223334444',
      },
      {
        name: 'Brandon',
        email: 'brandon@example.com',
        phone: '7778889999',
      },
      // More contacts starting with 'B'
    ],
  },
  {
    title: 'C',
    data: [
      {
        name: 'Charlie',
        email: 'charlie@example.com',
        phone: '7778889999',
      },
      {
        name: 'Catherine',
        email: 'catherine@example.com',
        phone: '0009998887',
      },
      {
        name: 'Connor',
        email: 'connor@example.com',
        phone: '2223334444',
      },
      {
        name: 'Caroline',
        email: 'caroline@example.com',
        phone: '6667778888',
      },
      {
        name: 'Caleb',
        email: 'caleb@example.com',
        phone: '3334445555',
      },
      // More contacts starting with 'C'
    ],
  },
  {
    title: 'D',
    data: [
      {
        name: 'David',
        email: 'david@example.com',
        phone: '1234567890',
      },
      {
        name: 'Daniel',
        email: 'daniel@example.com',
        phone: '9876543210',
      },
      // More contacts starting with 'D'
    ],
  },
  {
    title: 'E',
    data: [
      {
        name: 'Emily',
        email: 'emily@example.com',
        phone: '1112223333',
      },
      {
        name: 'Ethan',
        email: 'ethan@example.com',
        phone: '4445556666',
      },
      // More contacts starting with 'E'
    ],
  },
  {
    title: 'F',
    data: [
      {
        name: 'Frank',
        email: 'frank@example.com',
        phone: '8889990000',
      },
      {
        name: 'Fiona',
        email: 'fiona@example.com',
        phone: '2223334444',
      },
      // More contacts starting with 'F'
    ],
  },
  {
    title: 'G',
    data: [
      {
        name: 'George',
        email: 'george@example.com',
        phone: '1234567890',
      },
      {
        name: 'Grace',
        email: 'grace@example.com',
        phone: '9876543210',
      },
      // More contacts starting with 'G'
    ],
  },
  {
    title: 'H',
    data: [
      {
        name: 'Henry',
        email: 'henry@example.com',
        phone: '1112223333',
      },
      {
        name: 'Hannah',
        email: 'hannah@example.com',
        phone: '4445556666',
      },
      // More contacts starting with 'H'
    ],
  },
  {
    title: 'I',
    data: [
      {
        name: 'Isabella',
        email: 'isabella@example.com',
        phone: '8889990000',
      },
      {
        name: 'Ian',
        email: 'ian@example.com',
        phone: '2223334444',
      },
      // More contacts starting with 'I'
    ],
  },
  {
    title: 'J',
    data: [
      {
        name: 'Jacob',
        email: 'jacob@example.com',
        phone: '5554443333',
      },
      {
        name: 'Jessica',
        email: 'jessica@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'J'
    ],
  },
  {
    title: 'K',
    data: [
      {
        name: 'Kevin',
        email: 'kevin@example.com',
        phone: '5554443333',
      },
      {
        name: 'Kate',
        email: 'kate@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'K'
    ],
  },
  {
    title: 'L',
    data: [
      {
        name: 'Liam',
        email: 'liam@example.com',
        phone: '5554443333',
      },
      {
        name: 'Lily',
        email: 'lily@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'L'
    ],
  },
  {
    title: 'M',
    data: [
      {
        name: 'Matthew',
        email: 'matthew@example.com',
        phone: '5554443333',
      },
      {
        name: 'Megan',
        email: 'megan@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'M'
    ],
  },
  {
    title: 'N',
    data: [
      {
        name: 'Nathan',
        email: 'nathan@example.com',
        phone: '5554443333',
      },
      {
        name: 'Natalie',
        email: 'natalie@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'N'
    ],
  },
  {
    title: 'O',
    data: [
      {
        name: 'Oliver',
        email: 'oliver@example.com',
        phone: '5554443333',
      },
      {
        name: 'Olivia',
        email: 'olivia@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'O'
    ],
  },
  {
    title: 'P',
    data: [
      {
        name: 'Patrick',
        email: 'patrick@example.com',
        phone: '5554443333',
      },
      {
        name: 'Penelope',
        email: 'penelope@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'P'
    ],
  },
  {
    title: 'Q',
    data: [
      {
        name: 'Quincy',
        email: 'quincy@example.com',
        phone: '5554443333',
      },
      {
        name: 'Quinn',
        email: 'quinn@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'Q'
    ],
  },
  {
    title: 'R',
    data: [
      {
        name: 'Ryan',
        email: 'ryan@example.com',
        phone: '5554443333',
      },
      {
        name: 'Rachel',
        email: 'rachel@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'R'
    ],
  },
  {
    title: 'S',
    data: [
      {
        name: 'Samuel',
        email: 'samuel@example.com',
        phone: '5554443333',
      },
      {
        name: 'Sophia',
        email: 'sophia@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'S'
    ],
  },
  {
    title: 'T',
    data: [
      {
        name: 'Thomas',
        email: 'thomas@example.com',
        phone: '5554443333',
      },
      {
        name: 'Taylor',
        email: 'taylor@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'T'
    ],
  },
  {
    title: 'U',
    data: [
      {
        name: 'Uma',
        email: 'uma@example.com',
        phone: '5554443333',
      },
      {
        name: 'Uriah',
        email: 'uriah@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'U'
    ],
  },
  {
    title: 'V',
    data: [
      {
        name: 'Victoria',
        email: 'victoria@example.com',
        phone: '5554443333',
      },
      {
        name: 'Vincent',
        email: 'vincent@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'V'
    ],
  },
  {
    title: 'W',
    data: [
      {
        name: 'William',
        email: 'william@example.com',
        phone: '5554443333',
      },
      {
        name: 'Wendy',
        email: 'wendy@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'W'
    ],
  },
  {
    title: 'X',
    data: [
      {
        name: 'Xavier',
        email: 'xavier@example.com',
        phone: '5554443333',
      },
      {
        name: 'Xena',
        email: 'xena@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'X'
    ],
  },
  {
    title: 'Y',
    data: [
      {
        name: 'Yasmine',
        email: 'yasmine@example.com',
        phone: '5554443333',
      },
      {
        name: 'Yusuf',
        email: 'yusuf@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'Y'
    ],
  },
  {
    title: 'Z',
    data: [
      {
        name: 'Zara',
        email: 'zara@example.com',
        phone: '5554443333',
      },
      {
        name: 'Zoe',
        email: 'zoe@example.com',
        phone: '1112223333',
      },
      // More contacts starting with 'Z'
    ],
  },
];
export default function ContactList() {
  const listRef = useRef();

  const onPressTitle = useCallback(index => {
    if (!!listRef?.current) {
      listRef.current.sectionList.current.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: true,
      });
    }
  }, []);

  const renderSectionTab = useCallback(props => {
    return (
      <TouchableOpacity
        style={{marginLeft: 12, marginBottom: 16}}
        onPress={() => onPressTitle(props.index)}>
        <Text
          style={{
            fontWeight: 'bold',
            color: props.isActive ? 'red' : 'black',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    );
  }, []);

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={styles.itemStyle}>
        <View>
          <Text style={styles.itemStyleText}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.itemStyleText}>{item.phone}</Text>
        </View>
        <TouchableOpacity>
          <Text style={[styles.itemStyleText, {color: 'blue'}]}>INVITE</Text>
        </TouchableOpacity>
      </View>
    );
  }, []);

  const itemSeparatorComponent = useCallback(() => {
    return <View style={{height: 8}} />;
  }, []);

  const renderSectionHeader = useCallback(({section: {title}}) => {
    return (
      <View style={{height: 30}}>
        <Text>{title}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <SectionList
          stickySectionHeadersEnabled={false}
          ref={listRef}
          sections={CONTACTS}
          extraData={CONTACTS}
          renderTab={renderSectionTab}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={itemSeparatorComponent}
          renderSectionHeader={renderSectionHeader}
          renderSectionFooter={() => <View style={{height: 40}} />}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemStyle: {
    height: 100,
    backgroundColor: '#F0F0F0',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  itemStyleText: {
    fontSize: 18,
    color: 'black',
    marginHorizontal: 10,
  },
  modalStyle: {
    height: 300,
    width: 240,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignSelf: 'flex-end',
    bottom: 20,
  },
  descStyle: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right',
  },
  menuStyle: {
    fontWeight: 'bold',
    color: 'white',
  },
  btnStyle: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
});
