// @flow

import React, { PureComponent } from 'react';
import {View, FlatList, RefreshControl, StyleSheet} from 'react-native';

import BooksService from '../../services/books';
import Header from '../../components/header';
import BookItem from './item';
import SearchBar from './search-bar';



class Books extends PureComponent {

  state = {
    loading: true,
    items: [],
    search: false,
    term: ''
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = async () => {
    this.setState({ loading: true });
    const response = await BooksService.Get({ term: this.state.term });
    this.setState({ loading: false, items: response.items });
  };

  onChangeSearch = (event) => {
    this.setState({ term: event.nativeEvent.text });
  };

  showSearch = () => {
    this.setState({ search: !this.state.search });
  };

  renderItem = ({ item }) => (
    <BookItem title={item.volumeInfo.title}
              description={item.volumeInfo.description}
              image={{uri: item.volumeInfo.imageLinks.smallThumbnail}} />
  );

  render() {
    return (
      <View style={styles.wrapper}>
        <Header title="BooksApp" search={this.showSearch} />
        {this.state.search &&
          <SearchBar value={this.state.term} onChange={this.onChangeSearch} onSearch={this.getBooks} />}

        <FlatList
          data={this.state.items}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          refreshControl={<RefreshControl refreshing={this.state.loading} onRefresh={this.getBooks} />}
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
