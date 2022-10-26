import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Pressable,
} from 'react-native';
import React from 'react';
import {colors, shadow, spacing} from 'theme';
import {IMovie} from 'types';
import {RateStarIcon} from 'assets/icons';
import {RateWedget, Text} from 'components';
import {endpoints} from 'config';

type Props = {
  movie: IMovie;
  onPress: (movieId: number) => void;
  style?: ViewStyle;
};

const NewShowingMovieItem = ({movie, onPress, style}: Props) => {
  return (
    <Pressable
      style={[styles.container, style]}
      onPress={() => onPress(movie.id)}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: endpoints.imagesEndPonint + movie.backdrop_path}}
        />
      </View>
      <View style={{width: 120}}>
        <Text top="medium" variant="largeMedium" tx={movie.title} />
      </View>
      <RateWedget vote_average={movie.vote_average} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.normal,
    marginEnd: spacing.normal,
  },
  imageContainer: {
    ...shadow.medium,
  },
  image: {
    height: 200,
    width: 140,
    borderRadius: spacing.small,
  },
});
export default NewShowingMovieItem;
