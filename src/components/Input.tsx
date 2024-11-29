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
  LeadingView?: React.ReactNode;
  error?: string | null;
  onChangeText: (text: string) => void;
}
const Input = ({
  placeholder = '',
  placeholderColor = Colors.text_secondary,
  style = {},
  containerStyle = {},
  LeadingView = null,
  error = null,
  onChangeText,
}: IInputProps) => {
  return (
    <View>
      <View
        style={[
          styles.inputBg,
          containerStyle,
          error ? styles.errorBorder : {},
        ]}>
        <View style={styles.iconBg}>{LeadingView && LeadingView}</View>
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.text, error ? styles.errorText : {}, style]}
          placeholderTextColor={placeholderColor}
        />
      </View>
      {error && (
        <View style={styles.errorBg}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBg: {
    height: 54,
    borderRadius: 27,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
  },
  text: {
    ...CommonStyles.h2,
    ...CommonStyles.boldText,
    color: Colors.secondary,
    flex: 1,
  },
  iconBg: {
    marginRight: 16,
  },
  errorBg: {
    paddingLeft: 36,
  },
  errorText: {
    ...CommonStyles.h2,
    ...CommonStyles.boldText,
    color: Colors.error,
  },
  errorBorder: {
    borderWidth: 2,
    borderColor: Colors.error,
  },
});
