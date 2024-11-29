import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect} from 'react';
import Utils from '@utils/utils';
import CommonStyles from '@utils/theme/styles';
import Input from '@components/Input';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '@utils/theme/colors';
import Button from '@components/button';

const Authentication = () => {
  useEffect(() => {}, []);
  return (
    <View style={[CommonStyles.bg_primary, styles.container]}>
      <SafeAreaView />
      <View style={[CommonStyles.bg_primary, styles.centerViewBG]}>
        <Text style={[CommonStyles.h1, CommonStyles.boldText, styles.h1]}>
          {'Welcome'}
        </Text>
        <View style={styles.h2Bg}>
          <Text style={[CommonStyles.h2, styles.h2]}>{'To get start,'}</Text>
          <Text style={[CommonStyles.h2, styles.h2]}>
            {'Please enter email id and password.'}
          </Text>
        </View>
        <View style={[CommonStyles.bg_secondary, styles.centerView]}>
          <Input placeholder={'Email'} />
          <Input placeholder={'Password'} />
          <Button onPress={() => {}} title={'Sign Up'} />
        </View>
      </View>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  centerView: {
    borderRadius: 16,
    justifyContent: 'center',
    // padding: 16,
  },
  centerViewBG: {
    // justifyContent: 'center',
    paddingTop: 50,
  },
  container: {
    padding: 16,
  },
  h1: {
    fontSize: 36,
    marginBottom: 8,
  },
  h2: {
    fontSize: 18,
    color: Colors.text_secondary,
  },
  h2Bg: {
    marginBottom: 100,
  },
});
