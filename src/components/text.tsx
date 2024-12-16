import {StyleSheet, Text, TextProps, View, ViewProps} from 'react-native';
import React from 'react';
import {useIsRTL} from '@utils/hooks/useIsRTL';
import CommonStyles from '@utils/theme/styles';
import strings from '@utils/localisation';

interface IMZTextProps {
  localisedKey?: string;
  text?: string;
  textProps?: TextProps;
  viewProps?: ViewProps;
}

const MZText = ({
  localisedKey,
  text = '',
  textProps = {},
  viewProps = {},
}: IMZTextProps) => {
  const {isRTL} = useIsRTL();

  return (
    <View
      {...viewProps}
      style={[viewProps.style, isRTL ? CommonStyles.rtl : {}]}>
      <Text
        {...textProps}
        style={[textProps.style, isRTL ? CommonStyles.rtlText : {}]}>
        {localisedKey ? strings.getString(localisedKey) : text}
      </Text>
    </View>
  );
};

export default MZText;

const styles = StyleSheet.create({
  containter: {},
});
