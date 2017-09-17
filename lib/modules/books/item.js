// @flow

import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export const BookItem = (props: Object) => {

  const { title = '' } = props;

  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BookItem;


const styles = StyleSheet.create({

  wrapper: {
    backgroundColor: '#ffffff',
    borderColor: '#cccccc',
    borderBottomWidth: 1
  },

    title: {
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 16,
      fontSize: 18
    }
});
