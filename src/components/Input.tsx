import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import CommonStyles from '@utils/theme/styles';
import Colors from '@utils/theme/colors';

interface IInputProps {
  placeholder: string;
  placeholderColor?: string;
  style?: TextStyle;
  containerStyle?: ViewStyle;
}
const Input = ({
  placeholder = '',
  placeholderColor = Colors.text_secondary,
  style = {},
  containerStyle = {},
}: IInputProps) => {
  return (
    <View style={[styles.inputBg, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        style={[styles.text, style]}
        placeholderTextColor={placeholderColor}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBg: {
    height: 54,
    borderRadius: 27,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  text: {
    ...CommonStyles.h2,
    ...CommonStyles.boldText,
    color: Colors.secondary,
  },
});
