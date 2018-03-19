import React, { Component } from 'react';
import { 
    AppRegistry, View, 
    StyleSheet, FlatList, Text, 
    Image, Alert, TouchableHighlight,
    TouchableOpacity, ImageBackground 
} from 'react-native';
import firebase from 'react-native-firebase';

export default class FirebaseLogin extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text>Ok, Connect Firebase was successful</Text>
            </View>
        );
    }
}