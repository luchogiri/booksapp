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
    tabBarPosition: 'bottom', // android default is top
    tabBarOptions: {
      upperCaseLabel: false, //  android default is uppercase
      showIcon: true,        //  android default is only text
      showLabel: false,      //  show only icons!
      indicatorStyle: { opacity: 0 }, // android has a border by default
      activeTintColor: '#da2073',
      inactiveTintColor: '#333333',
      style: {
        backgroundColor: '#f8f8f8',
        height: 46,
        borderTopWidth: 1,
        borderColor: '#dddddd' // android has no border by default
      }
    }
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