import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, spacing} from 'theme';
import {Text} from 'components';
type MovieListHeaderProps = {
  headerTitle: string;
  onPressSeeMore?: () => void;
};

const SeeMoreButton = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity style={styles.seeMoreBtnView} onPress={onPress}>
      <Text tx="See more" variant="smallRegular" color={colors.gray[400]} />
    </TouchableOpacity>
  );
};

const MovieListHeader = (props: MovieListHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text tx={props.headerTitle} variant="largeLarge" />
      <SeeMoreButton onPress={props.onPressSeeMore} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xlarge,
    marginBottom: spacing.normal,
    alignItems: 'center',
  },
  seeMoreBtnView: {
    borderRadius: spacing.large,
    borderWidth: 1,
    borderColor: colors.gray[500],
    paddingVertical: spacing.tiny,
    paddingHorizontal: spacing.small,
  },
});

export default MovieListHeader;
