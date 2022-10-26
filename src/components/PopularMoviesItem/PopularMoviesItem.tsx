import {View, StyleSheet, Image, ScrollView, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {endpoints} from 'config';
import {IMovie, IGenre} from 'types';
import {colors, screen, spacing} from 'theme';
import {Text} from 'components';
import {RateStarIcon} from 'assets/icons';
import {AppContext} from 'navigation';
import {GenerButton} from 'components/Buttons';
import {useNavigation} from '@react-navigation/native';
import {MainStackScreenProps} from 'navigation/types';
import {useStore} from 'store/Store';

type PopularMoviesItemProps = {
  movie: IMovie;
};

type GendersProps = {
  geners: IGenre[];
};
const GenersList = ({geners}: GendersProps) => {
  if (!geners) {
    return null;
  }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.genersContainer}>
      {geners.map(({name, id}) => (
        <GenerButton key={id} title={name} />
      ))}
    </ScrollView>
  );
};

const PopularMoviesItem = ({movie}: PopularMoviesItemProps) => {
  const {
    createGenerStore: {getGeners},
  } = useStore();
  let navigation = useNavigation<MainStackScreenProps<'Home'>['navigation']>();
  const movieGeners = getGeners(movie.genre_ids);
  const onPressItem = () => {
    navigation.navigate('MovieDetails', {movieId: movie.id});
  };
  return (
    <Pressable onPress={onPressItem} style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: endpoints.imagesEndPonint + movie.backdrop_path}}
        resizeMode="cover"
      />
      <View style={styles.detailsContent}>
        <Text tx={movie.title} variant="largeMedium" color={colors.gray[900]} />
        <View style={styles.rateView}>
          <RateStarIcon />
          <Text
            color={colors.gray[400]}
            tx={`${movie.vote_average}/10 IMDb`}
            left="tiny"
          />
        </View>
        <GenersList geners={movieGeners} />
        <Text
          txStyle={styles.overviewTx}
          tx={movie.overview}
          style={styles.overviewContainer}
          color={colors.gray[500]}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: spacing.normal,
    marginStart: spacing.large,
  },
  image: {
    borderRadius: spacing.small,
    height: 130,
    width: 90,
  },
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.small,
  },
  detailsContent: {
    marginStart: spacing.normal,
  },
  genersContainer: {
    flexDirection: 'row',
    marginTop: spacing.small,
    overflow: 'hidden',
    maxHeight: spacing.xxlarge,
    width: screen.width * 0.7,
  },
  overviewContainer: {
    marginTop: spacing.small,
    marginEnd: spacing.medium,
    marginBottom: spacing.tiny,
    height: 50,
    width: 200,
  },
  overviewTx: {
    overflow: 'hidden',
    lineNum: 2,
  },
});

export default PopularMoviesItem;
