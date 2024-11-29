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
}

const Button = ({
  onPress = () => {},
  title,
  containerStyles = {},
  textStyles = {},
}: IButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, containerStyles]}>
        <Text style={[styles.text, textStyles]}>{title}</Text>
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
  text: {
    ...CommonStyles.h2,
    ...CommonStyles.boldText,
    color: Colors.text_primary_2,
  },
});
