// @flow

import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';



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
    height: Platform.OS === 'ios'? 64 : 68,
    paddingTop: Platform.OS === 'ios'? 20 : 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d51e6e'
  },

  title: {
    backgroundColor: 'transparent', // fix ios when align items = center
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 22,
    lineHeight: 24,
    fontFamily: 'Arapey-Regular'
  }
});
