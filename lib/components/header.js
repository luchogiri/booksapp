// @flow

import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Platform} from 'react-native';



export const Header = (props: Object) => {

  const {
    title = '',
    back,
    search,
  } = props;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={back}>
        {back && <Image source={require('../../public/img/icon-back.png')} style={styles.icon} />}
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.button} onPress={search}>
        {search && <Image source={require('../../public/img/icon-search.png')} style={styles.icon} />}
      </TouchableOpacity>
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({

  wrapper: {
    height: Platform.OS === 'ios'? 64 : 68,
    paddingTop: Platform.OS === 'ios'? 20 : 24,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#d51e6e'
  },

  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
    icon: {
      tintColor: '#ffffff'
    },

  title: {
    backgroundColor: 'transparent', // fix ios when align items = center
    flex: 1,
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 22,
    lineHeight: 24,
    fontFamily: 'Arapey-Regular'
  }
});
