import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      pic: DummyDoctor1,
      name: 'Alexander Jannie',
      message: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      pic: DummyDoctor2,
      name: 'Nairobi Putri Hayza',
      message: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      pic: DummyDoctor3,
      name: 'John McParker Steve',
      message: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <List
              key={doctor.id}
              pic={doctor.pic}
              name={doctor.name}
              message={doctor.message}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    marginTop: 30,
    marginLeft: 16,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
  },
});
