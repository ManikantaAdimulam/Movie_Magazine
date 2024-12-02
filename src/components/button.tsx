import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Colors from '@utils/theme/colors';
import CommonStyles from '@utils/theme/styles';

interface IButtonProps {
  onPress: () => void;
  title: string;
  containerStyles?: ViewStyle;
  textStyles?: TextStyle;
  isDisabled: boolean;
}

const Button = ({
  onPress = () => {},
  title,
  containerStyles = {},
  textStyles = {},
  isDisabled = true,
}: IButtonProps) => {
  return (
    <Pressable onPress={onPress} disabled={isDisabled}>
      <View
        style={[
          styles.container,
          isDisabled ? styles.disabledButtonBg : {},
          containerStyles,
        ]}>
        <Text
          style={[
            styles.text,
            isDisabled ? styles.disabledButtonText : {},
            textStyles,
          ]}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 54,
    backgroundColor: Colors.buttonBg,
    ...CommonStyles.centeredItems,
    borderRadius: 27,
    marginVertical: 8,
  },
  disabledButtonBg: {
    backgroundColor: Colors.disabled,
  },
  disabledButtonText: {
    color: Colors.white,
  },
  text: {
    ...CommonStyles.h2,
    ...CommonStyles.boldText,
    color: Colors.text_primary_2,
  },
});
