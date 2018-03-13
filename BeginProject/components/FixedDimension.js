import React, { Component } from 'react';
import { View } from 'react-native';

export default class FixedDimension extends Component {
  render() {
    return (
        <View>
            <View style={ {width: 50, height: 50, backgroundColor: 'red'} }></View>
            <View style={ {width: 50, height: 50, backgroundColor: 'gold'} }></View>
            <View style={ {width: 50, height: 70, backgroundColor: 'cyan'} }></View>
        </View>
    );
  }
}