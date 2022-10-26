import React from 'react';
import {default as Icon} from './svg/movies-tab-icon.svg';
import {default as MoviesUnselectedTabIcon} from './svg/movies-unselected-tab-icon.svg';

const MoviesTabIcon = ({fouced}: {fouced: boolean}) => {
  return fouced ? <Icon /> : <MoviesUnselectedTabIcon />;
};

export default MoviesTabIcon;
