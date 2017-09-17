// @flow

import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export const BookItem = (props: Object) => {

  const {
    title = '',
    description = '- no description -',
    image
  } = props;

  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <View style={styles.text}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description} numberOfLines={4}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;


const styles = StyleSheet.create({

  wrapper: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 14
  },

    image: {
      width: 72,
      height: 102,
      marginLeft: 16,
      marginTop: 16,
      marginRight: 16,
      marginBottom: 16,
      resizeMode: 'cover',
      backgroundColor: '#dddddd',
      borderColor: '#dddddd',
      borderWidth: 1
    },

    text: {
      flex: 1,
      paddingRight: 16,
      paddingTop: 20,
    },
      title: {
        marginBottom: 6,
        fontSize: 15,
        lineHeight: 17,
        color: '#1e1e1e',
        fontWeight: '700'
      },
      description: {
        color: '#666',
        fontWeight: '300',
        fontSize: 13,
        lineHeight: 15
      }
});
