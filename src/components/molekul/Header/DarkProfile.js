import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atom';
import {DummyDoctor6} from '../../../assets';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor6} style={styles.pic} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
  },
  name: {
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    textAlign: 'center',
  },
  desc: {
    color: colors.text.subTitle,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
  },
  pic: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
});
