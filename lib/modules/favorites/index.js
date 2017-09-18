// @flow

import React, { PureComponent } from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/header';
import BookItem from '../books/item';

class Favorites extends PureComponent {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) =>
      <Image source={require('../../../public/img/icon-like.png')} style={{ tintColor }} />
  };

  renderItem = ({ item }) => {
    return <BookItem title={item.title}
                     description={item.description}
                     image={item.image}
                     onPress={() => this.props.navigation.navigate('Book', item)} />
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Header title="Mis Favoritos" />

        {!this.props.favorites.length &&
          <Text style={styles.empty}>Aún no hay favoritos</Text>}

        <FlatList
          data={this.props.favorites}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          removeClippedSubviews={false}
        />
      </View>
    );
  }
}

export default connect(store => store)(Favorites);

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#e1e1e1'
  },

  empty: {
    marginTop: 32,
    color: '#666',
    textAlign: 'center'
  }

});
