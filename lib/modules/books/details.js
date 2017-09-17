// @flow

import React, { PureComponent } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from '../../components/header';


class BookDetails extends PureComponent {

  state = {
    title: '',
    description: '- no description -'
  };

  componentDidMount() {
    const { params } = this.props.navigation.state;

    this.setState({
      title: params.volumeInfo.title,
      description: params.volumeInfo.description || this.state.description
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Header back={() => this.props.navigation.goBack()} />

        <View style={styles.head}>
          <Text style={styles.title}>{this.state.title}</Text>
        </View>
        <Text numberOfLines={10} style={styles.description}>{this.state.description}</Text>
      </View>
    );
  }
}

export default BookDetails;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#fafafa'
  },

  head: {
    alignItems: 'center',
    backgroundColor: '#d51e6e',
  },
    title: {
      textAlign: 'center',
      color: '#fff',
      marginLeft: 48,
      marginRight: 48,
      marginBottom: 12,
      fontSize: 20,
      lineHeight: 23
    },

  description: {
    color: '#666',
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 16,
    marginTop: 24,
    marginRight: 16
  }

});
