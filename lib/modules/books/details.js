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

        <Text>{this.state.title}</Text>
        <Text numberOfLines={8}>{this.state.description}</Text>
      </View>
    );
  }
}

export default BookDetails;


const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
    backgroundColor: '#fafafa'
  }

});
