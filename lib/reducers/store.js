// @flow

import {createStore, combineReducers} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';

import Favorites from './favorites';


export const Store = () => {

  const store = createStore(
    combineReducers({ favorites: Favorites }),
    undefined,
    autoRehydrate()
  );

  persistStore(store, {storage: AsyncStorage});
  return store;
};

export default Store;