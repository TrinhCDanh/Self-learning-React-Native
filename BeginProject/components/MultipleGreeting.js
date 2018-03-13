/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
        <Text>{this.props.name}</Text>
    );
  }
}

export default class MultipleGreeting extends Component {
  render() {
    return (
        <View style={{ alignItems: 'center' }}>
            <Greeting name="Hello" />
            <Greeting name="Trinh Danh" />
        </View>
    );
  }
}



