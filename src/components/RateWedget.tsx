import {StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors, spacing} from 'theme';
import Text from './Text';
import {RateStarIcon} from 'assets/icons';

type RateWedgetProps = {
  vote_average: number;
  style?: ViewStyle | undefined;
};
const RateWedget = ({vote_average = 1, style}: RateWedgetProps) => {
  return (
    <View style={[styles.rateView, style]}>
      <RateStarIcon />
      <Text
        color={colors.gray[400]}
        tx={`${vote_average}/10 IMDb`}
        left="tiny"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.tiny,
  },
});

export default RateWedget;
