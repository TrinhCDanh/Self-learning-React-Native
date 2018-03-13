import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class JustifyContentExample extends Component {
  render() {
    return (
        <View style={{
            backgroundColor: 'aquamarine',
            flex: 1, 
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={ {width: 50, height: 50, backgroundColor: 'tomato', textAlign: 'center'} }>1</Text>
            <Text style={ {width: 50, height: 50, backgroundColor: 'gold'} }>2</Text>
            <Text style={ {width: 50, height: 70, backgroundColor: 'blue'} }>3</Text>
        </View>
    );
  }
}