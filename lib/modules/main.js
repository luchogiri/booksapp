// @flow

import React from 'react';
import {StackNavigator} from 'react-navigation';

import Books from './books';
import BookDetails from './books/details';


const Main = StackNavigator(
  {
    Books: { screen: Books },
    BookDetails: { screen: BookDetails }
  },

  { headerMode: 'none' }
);

export default Main;