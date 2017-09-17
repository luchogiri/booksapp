// @flow

import React from 'react';
import {StackNavigator} from 'react-navigation';

import Books from './books';
import Book from './book';


const Main = StackNavigator(
  {
    Books: { screen: Books },
    Book: { screen: Book }
  },

  { headerMode: 'none' }
);

export default Main;