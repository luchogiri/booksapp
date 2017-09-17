// @flow

import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
(console:any).disableYellowBox = true;

import Books from './modules/books';


export default class Application extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar translucent={true} barStyle="light-content" backgroundColor="rgba(0,0,0,0.3)" />
        <Books />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
