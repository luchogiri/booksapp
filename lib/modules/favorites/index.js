// @flow

import React, { PureComponent } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Header from '../../components/header';


class Favorites extends PureComponent {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <Image source={require('../../../public/img/icon-like.png')} style={{ tintColor }} />
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Header title="Mis Favoritos" />
        <Text style={styles.text}>Aquí irán los favoritos</Text>
      </View>
    );
  }
}

export default Favorites;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#fafafa'
  },

  text: {
    textAlign: 'center',
    marginTop: 24
  }

});
