// @flow

import React, { PureComponent } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { connect } from 'react-redux';


class Login extends PureComponent {

  login = () => {
    // pegale al servicio,
    // dio ok?
    if (user === "coder" && pass === "house")
      this.props.dispatch({ type: 'accounts/login' });
    // else { error = true }// si no, mostras error
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.buttom} onPress={this.login}>
          <Text>Ingresar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(store => store)(Login);

const styles = StyleSheet.create({

  buttom: {
    backgroundColor: '#fff',
    marginTop: 64,
    width: 200,
    alignSelf: 'center'
  },

  wrapper: {
    flex: 1,
    backgroundColor: '#d51e6e'
  }
});
