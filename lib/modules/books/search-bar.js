// @flow

import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';


export const SearchBar = (props: Object) => {

  const {
    value,
    onChange,
    onSearch
  } = props;

  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input}
                 value={value}
                 onChange={onChange}
                 onSubmitEditing={onSearch}
                 placeholder="Ingrese un término a buscar..."
                 underlineColorAndroid="transparent" />
    </View>
  );
};

export default SearchBar;


const styles = StyleSheet.create({

  wrapper: {
    height: 44,
    backgroundColor: '#d51e6e'
  },

  input: {
    flex: 1,
    borderRadius: 4,
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 12,
    lineHeight: 14,
    backgroundColor: '#fff'
  }
});
