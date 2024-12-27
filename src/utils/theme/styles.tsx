import {StyleSheet} from 'react-native';
import Colors from '@utils/theme/colors';

const CommonStyles = StyleSheet.create({
  bg_primary: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  centeredItems: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 24,
    color: Colors.text_primary,
  },
  h2: {
    fontSize: 16,
    color: Colors.text_secondary,
  },
  boldText: {
    fontWeight: 'bold',
  },
  rtl: {
    flexDirection: 'row-reverse',
  },
  rtlText: {
    textAlign: 'right',
  },
});

export default CommonStyles;
