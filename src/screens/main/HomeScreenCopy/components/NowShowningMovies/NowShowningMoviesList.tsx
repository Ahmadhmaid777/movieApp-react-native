import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {IMovie} from 'types';
import {spacing} from 'theme';
import NowShowingMovieItem from './NowShowingMovieItem';
import MovieListHeader from '../MovieListHeader';

type NowShowningMoviesListProps = {
  movies: IMovie[];
};

const NowShowningMoviesList = ({movies}: NowShowningMoviesListProps) => {
  return (
    <View>
      <MovieListHeader headerTitle="Now Showning" />
      <FlashList
        data={movies}
        renderItem={({item}) => <NowShowingMovieItem movie={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.moviesListContentContainer}
        estimatedItemSize={movies.length}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  moviesListContentContainer: {
    paddingLeft: spacing.xlarge,
  },
});
export default NowShowningMoviesList;
