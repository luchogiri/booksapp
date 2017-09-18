// @flow

import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import Books from './books';
import Book from './book';
import Favorites from './favorites';

const Tabs = TabNavigator(
  {
    Books: { screen: Books },
    Favorites: { screen: Favorites }
  },
  {
    tabBarPosition: 'bottom', // for android default is top
  }
);


const Main = StackNavigator(
  {
    Tabs: { screen: Tabs },
    Book: { screen: Book }
  },

  { headerMode: 'none' }
);

export default Main;