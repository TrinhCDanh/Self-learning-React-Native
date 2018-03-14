import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, Image,
        ScrollView, TextInput, Dimensions
        } from 'react-native';

export default class VerticalScrollView extends Component {
    render() {
        let {width} = Dimensions.get('window');
        return (
            <ScrollView 
                //maximumZoomScale={} only use for ios, not support on android
                //minimumZoomScale={}
                keyboardDismissMode='on-drag' // khi scroll thì keyboard sẽ hạ xuống
                //contentContainerStyle={{paddingLeft: 20}}
            >
                <Image
                    source={require('../images/Daily_Life_in_Nazarick.jpg')}  
                    style={{width: width, height: width * 1512 / 2748}}   
                ></Image>
                <Image
                    source={require('../images/test.jpg')}  
                    style={{width: width , height: width * 1512 / 2748}}   
                ></Image>
                <TextInput
                    style={{padding: 10}}
                    placeholder='Enter Text'
                >
                </TextInput>
                <View style={{backgroundColor: 'gold', height: 50}}>
                    <Text style={{textAlign:'center', fontSize: 20, padding: 15}}>Test</Text>
                </View>
                <Image
                    source={require('../images/test.jpg')}  
                    style={{width: width , height: width * 1512 / 2748}}   
                ></Image>
                <Image
                    source={require('../images/test.jpg')}  
                    style={{width: width , height: width * 1512 / 2748}}   
                ></Image>
            </ScrollView>
        );
    }
}