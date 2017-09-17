// @flow

import React from 'react';
import {StackNavigator} from 'react-navigation';

import Books from './books';


const Main = StackNavigator(
  {
    Books: { screen: Books }
  },

  { headerMode: 'none' }
);

export default Main;