// @flow

import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export const BookItem = (props: Object) => {

  const {
    title = '',
    image
  } = props;

  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BookItem;


const styles = StyleSheet.create({

  wrapper: {
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },

    image: {
      width: 80,
      height: 88,
      resizeMode: 'cover',
      backgroundColor: '#dddddd'
    },

    title: {
      flex: 1,
      marginTop: 16,
      marginBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      fontSize: 16,
      lineHeight: 18
    }
});
