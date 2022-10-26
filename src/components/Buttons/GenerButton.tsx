import {View, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {colors, spacing} from 'theme';
import Text from 'components/Text';

type Props = {
  title: string;
  onPress?: () => void;
};

const GenerButton = ({title, onPress}: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text tx={title.toUpperCase()} color={colors.secondry} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.tiny,
    paddingHorizontal: spacing.small,
    backgroundColor: colors.primary,
    borderRadius: spacing.large,
    marginEnd: spacing.small,
  },
});
export default GenerButton;
