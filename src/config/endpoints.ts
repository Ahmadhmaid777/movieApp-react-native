const moviesEndPoints = {
  popularMovies:
    'movie/popular?api_key=267a981c1ee7478dc9be392f7ad33ad4&language=en-US',
  nowShowingMovies:
    'movie/now_playing?api_key=267a981c1ee7478dc9be392f7ad33ad4&language=en-US',
  imagesEndPonint: 'https://image.tmdb.org/t/p/w500',
  movieDetails: (movie_id: number) =>
    `movie/${movie_id}?api_key=267a981c1ee7478dc9be392f7ad33ad4&language=en-US`,
  movieCredits: (movie_id: number) =>
    `movie/${movie_id}/credits?api_key=267a981c1ee7478dc9be392f7ad33ad4&language=en-US`,
};

const genersEndPoints = {
  genersList:
    'genre/movie/list?api_key=267a981c1ee7478dc9be392f7ad33ad4&language=en-US',
};

export default {...moviesEndPoints, ...genersEndPoints};
