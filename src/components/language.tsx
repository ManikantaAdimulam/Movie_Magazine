import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Colors from '@utils/theme/colors';
import strings from '@utils/localisation';
import {Languages} from '@utils/enum/enums';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@reduxjs/toolkit';
import {appActions} from '@redux/reducers/appSlice';

const Language = () => {
  const dispatch = useDispatch();
  const {language} = useSelector((state: RootState) => state.app);

  const changeToEn = () => {
    dispatch(appActions.changeLanguage(Languages.en));
    strings.setLanguage(Languages.en);
  };

  const changeToAr = () => {
    dispatch(appActions.changeLanguage(Languages.ar));
    strings.setLanguage(Languages.ar);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={changeToEn}>
        <View
          style={[
            styles.chip,
            language == Languages.en ? styles.selectedChip : {},
          ]}>
          <Text>English</Text>
        </View>
      </Pressable>
      <Pressable onPress={changeToAr}>
        <View
          style={[
            styles.chip,
            language == Languages.ar ? styles.selectedChip : {},
          ]}>
          <Text>عربي</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    backgroundColor: Colors.disabled,
    borderRadius: 8,
    marginRight: 16,
  },
  chip: {
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
  selectedChip: {
    backgroundColor: Colors.white,
  },
});
