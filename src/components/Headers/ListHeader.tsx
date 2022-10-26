import {View, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Text} from 'components';
import {colors, spacing} from 'theme';

type HeaderProps = {
  title: string;
  onPressButton?: () => void;
  style?: ViewStyle;
};

const ListHeader = ({title, onPressButton, style}: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      <Text tx={title} variant="largeLarge" color={colors.gray[900]} />
      <TouchableOpacity onPress={onPressButton} style={styles.headerButton}>
        <Text tx="See more" color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: spacing.xlarge,
    marginBottom: spacing.normal,
  },
  headerButton: {
    borderColor: colors.gray[300],
    borderWidth: 1,
    borderRadius: spacing.large,
    paddingVertical: spacing.tiny,
    paddingHorizontal: spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ListHeader;
