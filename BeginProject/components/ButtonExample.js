import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert, Text } from 'react-native';

export default class ButtonExample extends Component {
    _triggerButton = () => {
        Alert.alert('Hello world')
    }
    render() {
        return (
            <View style={styles.container}>
                <Button 
                    onPress={this._triggerButton}
                    title="This is a button"
                    color='green' 
                >
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });