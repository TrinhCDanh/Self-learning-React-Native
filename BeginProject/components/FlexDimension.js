import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimension extends Component {
  render() {
    return (
        <View style={{flex:1}}>
            <View style={ {flex:50, backgroundColor: 'red'} }></View>
            <View style={ {flex:50, height: 50, backgroundColor: 'gold'} }></View>
            <View style={ {height: 50, backgroundColor: 'cyan'} }></View>
        </View>
    );
  }
}