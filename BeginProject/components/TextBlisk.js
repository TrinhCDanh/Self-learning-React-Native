/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        }
        var todoTask = () => {
            this.setState(previousState => {
                 return {
                     showText: !previousState.showText
                 };
            });   
        };
        setInterval(todoTask, 1000);
    }
    render() {
        let textDisplay = this.state.showText ? this.props.textInput :  ' ' ;
        return (
            <Text> 
                {textDisplay}
            </Text>
        );
    }
}

export default class TextBlink extends Component {
    render() {
      return (
          <View>
              <Blink textInput="Hello world!!!" />
          </View>
      );
    }
  }

