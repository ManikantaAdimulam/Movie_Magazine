import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Utils from '@utils/utils';
import CommonStyles from '@utils/theme/styles';
import Input from '@components/Input';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '@utils/theme/colors';
import Button from '@components/button';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {AuthState} from '@screens/auth/type';

const Authentication = () => {
  const [state, setState] = useState<AuthState>({
    mail: '',
    password: '',
    email_error: null,
    password_error: null,
  });

  useEffect(() => {}, []);

  const onEmilEnter = (text: string) => {
    const error = Utils.validateEmail(text);
    if (error != null) {
      setState(prevState => ({...prevState, email_error: error}));
      return;
    }
    setState(prevState => ({...prevState, mail: text, email_error: null}));
  };

  const onPasswordEnter = (text: string) => {
    const error = Utils.validatePassword(text);
    if (error != null) {
      setState(prevState => ({...prevState, password_error: error}));
      return;
    }
    setState(prevState => ({
      ...prevState,
      password: text,
      password_error: null,
    }));
  };

  //
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
          <Input
            placeholder={'Email'}
            LeadingView={
              <EntypoIcon name="mail" size={20} color={Colors.text_secondary} />
            }
            onChangeText={onEmilEnter}
            error={state.email_error}
          />
          <Input
            placeholder={'Password'}
            LeadingView={
              <EntypoIcon name="key" size={20} color={Colors.text_secondary} />
            }
            onChangeText={onPasswordEnter}
            error={state.password_error}
          />
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
