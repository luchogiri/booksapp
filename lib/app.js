// @flow

import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import {Provider} from 'react-redux';
(console:any).disableYellowBox = true;

import Main from './modules/main';
import Store from './reducers/store';

export default class Application extends Component {

  render() {
    return (
      <Provider store={Store()}>
        <View style={styles.wrapper}>
          <StatusBar translucent={true} barStyle="light-content" backgroundColor="rgba(0,0,0,0.3)" />
          <Main onNavigationStateChange={null} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
  }
});
