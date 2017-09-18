// @flow

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export const BookHead = (props: Object) => {

  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <Text style={styles.data} numberOfLines={1}>
          {props.date} - {props.publisher}
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <Image style={styles.image} source={props.image} />
    </View>
  );
};

export default BookHead;


const styles = StyleSheet.create({

  wrapper: {
    minHeight: 128
  },

  image: {
    width: 96,
    height: 120,
    resizeMode: 'cover',
    backgroundColor: '#dddddd',
    borderColor: '#dddddd',
    borderWidth: 1,
    position: 'absolute',
    left: 24,
    top: 12
  },

  top: {
    paddingTop: 12,
    paddingBottom: 10,
    paddingRight: 8,
    backgroundColor: '#d51e6e',
    paddingLeft: 138
  },
    data: {
      color: '#fafafa',
      fontSize: 12
    },

  text: {
    paddingLeft: 138,
    paddingRight: 16
  },
    title: {
      fontSize: 18,
      lineHeight: 22,
      marginTop: 12,
      color: '#444444',
      fontWeight: '600'
    }
});
