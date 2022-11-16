import {IGenre} from 'types';

import {action, computed, makeObservable} from 'mobx';
import axios from 'axios';
import {endpoints} from 'config';
class GenerStore {
  geners: IGenre[] = [];

  fetchGeners = () => {
    axios
      .get(endpoints.genersList)
      .then(res => {
        this.geners = res.data.genres;
      })
      .catch(err => {
        throw new Error(err.message);
      });
  };

  getGeners = (ids: number[]) => {
    return this.geners?.filter(value => ids.includes(value.id));
  };
  constructor() {
    makeObservable(this, {
      fetchGeners: action,
    });
  }
}

export const createGenerStore = new GenerStore();
