import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CommonStyles from '@utils/theme/styles';
import {RootState} from '@redux/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@utils/theme/colors';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {screens} from '@services/navigation/constants';

const InitialScreen = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state?.auth?.isLoggedIn,
  );
  const navigation = useNavigation();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate(screens.MOVIES);
      return;
    }
    navigation.navigate(screens.INITIAL);
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <Icon name={'movie-roll'} size={150} color={Colors.white} />
      <Text style={styles.text}>MOVIES MAGAZINE</Text>
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.bg_primary,
    ...CommonStyles.centeredItems,
  },
  text: {
    ...CommonStyles.h1,
    ...CommonStyles.boldText,
    fontStyle: 'italic',
  },
});
