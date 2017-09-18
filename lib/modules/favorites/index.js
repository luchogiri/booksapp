// @flow

import React, { PureComponent } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../components/header';


class Favorites extends PureComponent {

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
