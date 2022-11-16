import {
  View,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {MainStackScreenProps} from 'navigation/types';
import {IMovieDetails} from 'types/movie.types';
import {
  getMovieCast,
  getMovieDetails,
  useMovieCast,
} from './MovieDetailsScreen.hooks';
import styles from './styles';
import {endpoints} from 'config';
import {GenerButton, RateWedget, Text} from 'components';
import {BookmarkTabIcon} from 'assets/icons';
import {AppContext} from 'navigation';
import {colors} from 'theme';
import Header from './components/Header';
import {ICast} from 'types';
import CastList from './components/CastList';
import {useStore} from 'store/Store';
import {observer} from 'mobx-react-lite';
import FastImage from 'react-native-fast-image';

const MovieDetailsScreen = ({
  navigation,
  route,
}: MainStackScreenProps<'MovieDetails'>) => {
  const [movie, setMovie] = useState<IMovieDetails>();
  const [isBooked, setIsBooked] = useState(false);
  let {
    createWatchListStore: {
      addMovie,
      removeMovie,
      isAddedToWatchList,
      watchList,
    },
  } = useStore();
  const [cast, setCast] = useState<ICast[]>();
  if (!isBooked && isAddedToWatchList(movie?.id)) {
    setIsBooked(true);
  }

  const _getMovieDetails = async () => {
    let data = await getMovieDetails(route.params.movieId);
    setMovie(data);
  };
  const _getMovieCast = async () => {
    let data = await getMovieCast(route.params.movieId);
    setCast(data.data.cast);
  };
  useEffect(() => {
    _getMovieDetails();
    _getMovieCast();
  }, []);

  const onPressBookmark = () => {
    if (!isBooked) {
      addMovie(movie);
    } else {
      removeMovie(movie?.id);
    }

    setIsBooked(prev => !prev);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} />
      <FastImage
        style={styles.image}
        resizeMode={FastImage.resizeMode.stretch}
        source={{uri: endpoints.imagesEndPonint + movie?.backdrop_path}}>
        <Header />
      </FastImage>
      <View style={styles.detailsContainer}>
        <View style={styles.spaceBetweenRow}>
          <Text tx={movie?.title} variant="largeXLarge" />
          <TouchableOpacity onPress={onPressBookmark}>
            <BookmarkTabIcon fouced={isBooked} />
          </TouchableOpacity>
        </View>
        <RateWedget vote_average={movie?.vote_average} />
        <View style={styles.row}>
          {movie?.genres.map(item => (
            <GenerButton key={item.id} title={item.name} />
          ))}
        </View>
        <Text tx="Description" variant="largeXLarge" top="normal" />
        <Text
          top="normal"
          tx={movie?.overview}
          variant="mediumMedium"
          color={colors.gray[300]}
        />
        <CastList cast={cast} />
      </View>
    </View>
  );
};

export default observer(MovieDetailsScreen);
