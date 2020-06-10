import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, List} from '../../components';
import {colors} from '../../utils';
import {
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        pic={DummyDoctor4}
        name="Alexander Janie"
        message="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        pic={DummyDoctor5}
        name="Alexander Janie"
        message="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        pic={DummyDoctor6}
        name="Alexander Janie"
        message="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        pic={DummyDoctor7}
        name="Alexander Janie"
        message="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        pic={DummyDoctor8}
        name="Alexander Janie"
        message="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
