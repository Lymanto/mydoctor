import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atom';

const DarkProfile = ({onPress, title, desc, photo}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={photo} style={styles.pic} />
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
