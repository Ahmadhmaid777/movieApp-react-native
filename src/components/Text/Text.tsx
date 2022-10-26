import {
  View,
  Text as RNText,
  TextProps as RNTextProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {spacing} from 'theme';
import {typography} from 'theme/Fonts';

type spacingProp = keyof typeof spacing;
type TypographyProp = keyof typeof typography;

interface TextProps extends RNTextProps {
  tx: string;
  top?: spacingProp;
  bottom?: spacingProp;
  left?: spacingProp;
  right?: spacingProp;
  color?: string;
  variant?: TypographyProp;
  style?: ViewStyle;
  txStyle?: TextStyle;
  touchable?: boolean;
  onPress?: () => void;
}

const Text = ({
  tx,
  top = 'none',
  left = 'none',
  right = 'none',
  bottom = 'none',
  style,
  variant = 'smallRegular',
  txStyle,
  color,
  touchable,
  onPress,
  ...rest
}: TextProps) => {
  const spacingStyle = {
    marginTop: spacing[top],
    marginStart: spacing[left],
    marginEnd: spacing[right],
    marginBottom: spacing[bottom],
  } as ViewStyle;

  if (touchable) {
    return (
      <TouchableOpacity onPress={onPress} style={[spacingStyle, style]}>
        <RNText style={[txStyle, typography[variant], {color: color}]}>
          {tx}
        </RNText>
      </TouchableOpacity>
    );
  }
  return (
    <View style={[spacingStyle, style]}>
      <RNText style={[txStyle, typography[variant], {color: color}]} {...rest}>
        {tx}
      </RNText>
    </View>
  );
};

export default Text;
