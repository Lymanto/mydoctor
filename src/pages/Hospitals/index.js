import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {
  ILHospitalBG,
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../components';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          pic={DummyHospital1}
          address="Jln. Surya Sejahtera 20"
          title1="Rumah Sakit"
          title2="Citra Bunga Merdeka"
        />
        <ListHospital
          pic={DummyHospital2}
          address="Jln. Surya Sejahtera 20"
          title1="Rumah Sakit Anak"
          title2="Happy Family & Kids"
        />
        <ListHospital
          pic={DummyHospital3}
          address="Jln. Surya Sejahtera 20"
          title1="Rumah Sakit Jiwa"
          title2="Tingkatan Paling Atas"
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  background: {
    paddingTop: 30,
    height: 240,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
});
