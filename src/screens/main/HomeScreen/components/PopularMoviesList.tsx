import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import {ListHeader} from 'components';
import {IMovie} from 'types';
import {FlashList} from '@shopify/flash-list';
import {PopularMoviesItem} from 'components';
import {screen, spacing} from 'theme';

type PopularMoviesListProps = {
  movies: IMovie[];
  ListHeaderComponent?: ReactNode;
};
const PopularMoviesList = ({
  movies,
  ListHeaderComponent,
}: PopularMoviesListProps) => {
  if (movies?.length == 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.moviesList}>
        <FlatList
          data={movies}
          ListHeaderComponent={
            <>
              {ListHeaderComponent}
              <ListHeader
                title="Popular"
                style={styles.titleHeader}
                onPressButton={() => {}}
              />
            </>
          }
          renderItem={({item}) => <PopularMoviesItem movie={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  moviesList: {
    height: screen.height * 0.8,
  },
  titleHeader: {
    marginTop: spacing.normal,
  },
});
export default PopularMoviesList;
