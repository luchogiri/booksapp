// @flow

import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
(console:any).disableYellowBox = true;

import Main from './modules/main';


export default class Application extends Component {

  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar translucent={true} barStyle="light-content" backgroundColor="rgba(0,0,0,0.3)" />
        <Main onNavigationStateChange={null} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eee',
  }
});
