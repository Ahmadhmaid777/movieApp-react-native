import axios from 'axios';
import {endpoints} from 'config';
import {useEffect, useState} from 'react';
import {ICredit} from 'types';
import {IMovieDetails} from 'types/movie.types';

type GetMovieDetailsResponse = {
  data: IMovieDetails;
};
const getMovieDetails = async movieId => {
  let response = await axios.get<GetMovieDetailsResponse>(
    endpoints.movieDetails(movieId),
  );
  return response.data;
};

type GetMovieCastResposnse = {
  data: ICredit;
};
const getMovieCast = movieId => {
  return axios.get<GetMovieCastResposnse>(endpoints.movieCredits(movieId));
};

export {getMovieDetails, getMovieCast};
