import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FlexExample extends Component {
  render() {
    return (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={ {width: 50, height: 50, backgroundColor: 'red', textAlign: 'center'} }>1</Text>
            <Text style={ {width: 50, height: 50, backgroundColor: 'gold'} }>2</Text>
            <Text style={ {width: 50, height: 50, backgroundColor: 'cyan'} }>3</Text>
        </View>
    );
  }
}