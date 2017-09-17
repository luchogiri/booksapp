// @flow

import React, { PureComponent } from 'react';
import {View, FlatList, RefreshControl, StyleSheet} from 'react-native';

import BooksService from '../../services/books';
import Header from '../../components/header';
import BookItem from './item';



class Books extends PureComponent {

  state = {
    loading: true,
    items: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    this.setState({ loading: true });
    const response = await BooksService.Get();
    this.setState({ loading: false, items: response.items });
  };

  renderItem = ({ item }) => (
    <BookItem title={item.volumeInfo.title}
              description={item.volumeInfo.description}
              image={{uri: item.volumeInfo.imageLinks.smallThumbnail}} />
  );

  render() {
    return (
      <View style={styles.wrapper}>
        <Header title="BooksApp" />
        <FlatList
          data={this.state.items}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          refreshControl={<RefreshControl refreshing={this.state.loading} onRefresh={this.getBooks} />
          }
        />
      </View>
    );
  }
}

export default Books;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#e1e1e1'
  }

});
