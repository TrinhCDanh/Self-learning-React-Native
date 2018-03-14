import React, { Component } from 'react';
import {    View, StyleSheet, Button, Alert,
            Text, Image,
            TouchableHighlight, // Thay đỏi màu khi click vào button
            TouchableNativeFeedback, // chỉ sử dụng trên android
            TouchableOpacity,
            TouchableWithoutFeedback 
        } from 'react-native';

export default class TouchesExample extends Component {
    _triggerButton = () => {
        Alert.alert('Hello world')
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight 
                    onPress={this._triggerButton}
                    underlayColor='red'
                    onShowUnderlay={()=>{
                        alert('Hello world');
                    }} 
                >
                    <Text style={ {padding: 20, backgroundColor: 'gold'} }>
                        TouchableHighlight
                    </Text>
                </TouchableHighlight>
                <TouchableNativeFeedback
                    onPress={this._triggerButton}
                    useForeground={true} //sử dụng màu nền của cha
                >
                    <View style={{ backgroundColor:'blue' }}>
                        <Text style={ {padding: 20} }>
                            TouchableNativeFeedback
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity>
                     <View style={{ backgroundColor:'red' }}>
                        <Text style={ {padding: 20} }>
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    //onPress={this._triggerButton}
                    onLongPress={()=>{
                        alert('onLongPress');
                    }}
                    // onPressIn={()=>{
                    //     alert('Hello World');
                    // }}
                    // onPressOut={()=>{
                    //     alert('Goodbye World');
                    // }}
                    //disabled={true}
                >
                    <View style={{ backgroundColor:'cyan' }}>
                        <Text style={ {padding: 20} }>
                            TouchableWithoutFeedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
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