import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {shadow, spacing} from 'theme';
import {IMovie} from 'types';
import FastImage from 'react-native-fast-image';
import {RateWedget, Text} from 'components';
import {RateStarIcon} from 'assets/icons';

type NowShowingMovieItemProps = {
  movie: IMovie;
};

const NowShowingMovieItem = ({
  movie: {backdrop_path, title, vote_average},
}: NowShowingMovieItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <FastImage source={{uri: backdrop_path}} />
      </View>
      <Text style={styles.title} tx={title} variant="largeLarge" top="normal" />
      <RateWedget style={styles.rateWedget} vote_average={vote_average} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginEnd: spacing.normal,
  },
  imageView: {
    width: 140,
    height: 210,
    borderRadius: spacing.small,
    ...shadow.normal,
  },
  title: {
    width: 140,
  },
  rateWedget: {
    marginTop: spacing.small,
  },
});
export default NowShowingMovieItem;
