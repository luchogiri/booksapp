// @flow

import React, { PureComponent } from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import Header from '../../components/header';
import BookHead from './head';


class BookDetails extends PureComponent {

  state = {};

  componentDidMount() {
    const { params } = this.props.navigation.state;
    this.setState({ ...params });
  }

  onLike = () => {
    this.props.dispatch({ type: 'favorites/add', item: this.state.id });
  };

  onUnlike = () => {
    this.props.dispatch({ type: 'favorites/remove', item: this.state.id });
  };

  isLiked = () => {
    return this.props.favorites.filter(fav => fav === this.state.id).length;
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Header back={() => this.props.navigation.goBack()}
                like={this.isLiked() ? this.onUnlike : this.onLike}
                liked={this.isLiked()} />

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

export default connect(store => ({ favorites: store }))(BookDetails);


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
