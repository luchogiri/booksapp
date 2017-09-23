// @flow

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {createLogger } from 'redux-logger';
import {AsyncStorage} from 'react-native';

import Favorites from './favorites';
import Accounts from './accounts';


export const Store = () => {

  const logger = createLogger({
    predicate: (getState, action) => process.env.NODE_ENV === 'development',
    collapsed: true,
    duration: true,
  });

  const store = createStore(
    combineReducers({ favorites: Favorites, accounts: Accounts }),
    applyMiddleware(logger),
    autoRehydrate()
  );

  persistStore(store, {storage: AsyncStorage});
  return store;
};

export default Store;