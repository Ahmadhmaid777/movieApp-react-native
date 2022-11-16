import React, {useContext, useEffect, useState} from 'react';

import Header from './components/Header';
import {Wrapper} from 'components';
import NewShowingMoviesList from './components/NewShowingMoviesList';
import {
  getGeners,
  getNowShowingMovies,
  usePopularMovies,
  usePopularMoviesTest,
} from './HomeScreen.hooks';
import PopularMoviesList from './components/PopularMoviesList';
import {IMovie} from 'types';

const HomeScreen = () => {
  let [nowShowingMovies, setNowShowingMovies] = useState<IMovie[]>([]);
  let {data, error, loading, fetchNextPage} = usePopularMovies();

  const _getNowShowingMovies = async () => {
    let data = await getNowShowingMovies({pageParam: 1});
    setNowShowingMovies(data?.results);
  };

  useEffect(() => {
    _getNowShowingMovies();
  }, []);

  console.log('render');

  return (
    <Wrapper scrollEnable={false}>
      <Header onPressRightComponent={fetchNextPage} title="FILMkx" />
      <PopularMoviesList
        ListHeaderComponent={<NewShowingMoviesList movies={nowShowingMovies} />}
        movies={data}
      />
    </Wrapper>
  );
};

export default HomeScreen;
