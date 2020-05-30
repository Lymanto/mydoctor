import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../../../assets';
import {Gap} from '../../atom';
import {colors} from '../../../utils';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <IconBackDark />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: 'Nurito-SemiBold',
  },
});
