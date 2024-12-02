import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Utils from '@utils/utils';
import CommonStyles from '@utils/theme/styles';
import Input from '@components/Input';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '@utils/theme/colors';
import Button from '@components/button';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {AuthState} from '@screens/auth/type';
import {useNavigation} from '@react-navigation/native';
import {screens} from '@services/navigation/constants';
import {useDispatch} from 'react-redux';
import {authActions} from '@redux/reducers/authSlice';
import strings from '@utils/localisation';

const Authentication = () => {
  //
  const [state, setState] = useState<AuthState>({
    mail: '',
    password: '',
    email_error: null,
    password_error: null,
  });

  //
  const navigation = useNavigation();
  const dispatch = useDispatch();

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

  const onSignUp = () => {
    dispatch(
      authActions.saveUserDetails({
        email: state.mail,
        password: state.password,
      }),
    );
    navigation.navigate(screens.MOVIES);
  };

  const isButtonDisabled =
    state.email_error !== null ||
    state.password_error !== null ||
    state.mail.length <= 0 ||
    state.password.length <= 0;

  //
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[CommonStyles.bg_primary, styles.container]}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={[CommonStyles.bg_primary, styles.centerViewBG]}>
          <SafeAreaView />
          <Text style={[CommonStyles.h1, CommonStyles.boldText, styles.h1]}>
            {strings.welcome}
          </Text>
          <View style={styles.h2Bg}>
            <Text style={[CommonStyles.h2, styles.h2]}>{strings.start}</Text>
            <Text style={[CommonStyles.h2, styles.h2]}>
              {strings.enter_cred}
            </Text>
          </View>
          <View style={[CommonStyles.bg_secondary, styles.centerView]}>
            <Input
              placeholder={strings.email}
              LeadingView={
                <EntypoIcon
                  name="mail"
                  size={20}
                  color={Colors.text_secondary}
                />
              }
              onChangeText={onEmilEnter}
              error={state.email_error}
            />
            <Input
              placeholder={strings.password}
              LeadingView={
                <EntypoIcon
                  name="key"
                  size={20}
                  color={Colors.text_secondary}
                />
              }
              onChangeText={onPasswordEnter}
              error={state.password_error}
            />
            <Button
              onPress={onSignUp}
              title={strings.sign_up}
              isDisabled={isButtonDisabled}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  centerView: {
    borderRadius: 16,
    justifyContent: 'center',
  },
  centerViewBG: {
    paddingTop: 50,
  },
  container: {
    padding: 16,
    justifyContent: 'flex-end',
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
