// @flow

import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import {Provider, connect} from 'react-redux';
(console:any).disableYellowBox = true;

import Main from './modules/main';
import Login from './modules/login';
import Store from './reducers/store';

class StoreApp extends Component {
  render () {
    return (
      <View style={styles.wrapper}>
        <StatusBar translucent={true} barStyle="light-content" backgroundColor="rgba(0,0,0,0.3)" />
        {this.props.accounts.logged_in ?
          <Main onNavigationStateChange={null} />:
          <Login />}
      </View>
    );
  }
}

const StoreAppConnect = connect(store => store)(StoreApp);


export default class Application extends Component {

  render() {
    return (
      <Provider store={Store()}>
        <StoreAppConnect />
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
