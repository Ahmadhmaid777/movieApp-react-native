import React, {ReactNode} from 'react';
import {FlashList} from '@shopify/flash-list';
import {IMovie} from 'types';
import NewShowingMovieItem from './NewShowingMovieItem';
import {useNavigation} from '@react-navigation/native';
import {HomeTapScreenProps} from 'navigation/types';
import {StyleSheet, View} from 'react-native';
import {spacing} from 'theme';
import {ListHeader} from 'components';
type Props = {
  movies: IMovie[];
};

const NewShowingMoviesList = ({movies = []}: Props) => {
  const navigation =
    useNavigation<HomeTapScreenProps<'Movies'>['navigation']>();

  const handelItemPress = (movieId: number) => {
    navigation.navigate('MovieDetails', {
      movieId: movieId,
    });
  };
  if (movies?.length == 0) {
    return null;
  }

  return (
    <View>
      <ListHeader
        style={styles.headerComponent}
        title="New showing"
        onPressButton={() => {}}
      />
      <FlashList
        data={movies}
        contentContainerStyle={styles.listStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <NewShowingMovieItem onPress={handelItemPress} movie={item} />
        )}
        estimatedItemSize={movies.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    paddingLeft: spacing.xlarge,
  },
  headerComponent: {
    marginStart: spacing.xlarge,
  },
});

export default NewShowingMoviesList;
