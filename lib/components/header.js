// @flow

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



export const Header = (props: Object) => {

  const { title } = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({

  wrapper: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bbbbbb'
  },

  title: {
    backgroundColor: 'transparent', // fix ios when align items = center
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
    lineHeight: 20
  }
});
