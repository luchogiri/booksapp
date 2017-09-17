// @flow

import React, { PureComponent } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import Header from '../../components/header';


class Books extends PureComponent {

  state = {
    loading: true,
    items: [
      { key: 1, title: 'Libro 1' },
      { key: 2, title: 'Libro 2' },
      { key: 3, title: 'Libro 3' }
    ]
  };

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.wrapper}>
        <Header title="Books App" />

        <FlatList
          data={this.state.items}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default Books;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  item: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  }

});
