import {action, computed, makeObservable, observable} from 'mobx';
import {IMovie} from 'types';
class WatchListStore {
  watchList: IMovie[] = [];

  addMovie = (movie: IMovie) => {
    this.watchList.push(movie);
  };
  get watchListData() {
    let data = this.watchList;
    return data;
  }

  isAddedToWatchList = (movieId: number) => {
    const index = this.watchList.findIndex(value => {
      return value.id === movieId;
    });

    return index !== -1 ? (index !== undefined ? true : false) : false;
  };

  removeMovie = (movieId: number) => {
    const index = this.watchList?.findIndex(value => {
      return value.id === movieId;
    });
    if (index !== -1) {
      this.watchList?.splice(index, 1);
    }
  };
  constructor() {
    makeObservable(this, {
      watchList: observable,
      addMovie: action,
      watchListData: computed,
      removeMovie: action,
    });
    this.watchList = [];
  }
}

export const createWatchListStore = new WatchListStore();
