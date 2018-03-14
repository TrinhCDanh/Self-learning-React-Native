import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, Image,
        ScrollView, TextInput, Dimensions, Button
        } from 'react-native';

export default class HorizontalScrollView extends Component {
    _triggerButton = () => {
        console.log('Hello world')
    }
    render() {
        let {width, height} = Dimensions.get('window');
        return (
            <ScrollView 
                horizontal={true}
                pagingEnabled={true}
                //scrollIndicatorInsets={{top,bottom,}} only use for ios
                showsHorizontalScrollIndicator={false} // show thanh scroll
                // onMomentumScrollBegin={()=>{
                //     alert('Begin scroll');
                // }} // tạo sự kiện khi scroll
                // onMomentumScrollEnd={()=>{
                //     alert('End scroll');
                // }}
                onScroll={(event)=>{
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.x}`;
                    console.log(logData);
                }}
                scrollEventThrottle={10} // Khoảng thời gian thay đổi trên onScroll
            >
                <View
                    style={{
                        flex: 1,
                        width: width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'gold'
                    }}
                >
                    <Text>Screen 1</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        width: width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'blue'
                    }}
                >
                    <Text>Screen 1</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        width: width,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'tomato'
                    }}
                >
                    <Text>Screen 1</Text>
                    <Button onPress={this._triggerButton}
                    title="This is a button"
                    color='gold' ></Button>
                </View>
            </ScrollView>
            
        );
    }
}