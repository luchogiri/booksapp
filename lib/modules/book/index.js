// @flow

import React, { PureComponent } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import Header from '../../components/header';
import BookHead from './head';


class BookDetails extends PureComponent {

  state = {
    title: '',
    description: '- no description -',
    date: undefined,
    publisher: '',
    image: undefined
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;

    let image = (params.volumeInfo.imageLinks || {}).smallThumbnail;
    if ( image ) image = { uri: image };

    this.setState({
      title: params.volumeInfo.title,
      description: params.volumeInfo.description || this.state.description,
      date: params.volumeInfo.publishedDate,
      publisher: params.volumeInfo.publisher,
      image
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Header back={() => this.props.navigation.goBack()} />

        <ScrollView bounces={false}>
          <BookHead title={this.state.title}
                    date={this.state.date}
                    publisher={this.state.publisher}
                    image={this.state.image} />

          <Text style={styles.description} numberOfLines={8}>{this.state.description}</Text>
        </ScrollView>

      </View>
    );
  }
}

export default BookDetails;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  description: {
    color: '#666',
    fontSize: 13,
    lineHeight: 18,
    marginLeft: 24,
    marginTop: 24,
    marginRight: 24
  }

});
