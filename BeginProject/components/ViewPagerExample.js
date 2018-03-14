import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Text, Image,
        ScrollView, TextInput, Dimensions, Button,
        ViewPagerAndroid
        } from 'react-native';

export default class ViewPagerExample extends Component {
    _triggerButton = () => {
        console.log('Hello world')
    }
    render() {
        let {width, height} = Dimensions.get('window');
        return (
            <ViewPagerAndroid 
                style={{flex: 1}}
                initialPage={1} //trang bắt đầu
                // onPageScroll={(event)=>{
                //     console.log(event);
                // }}
                onPageScrollStateChanged={(state)=>{
                    console.log(`Scrolling state = ${state}`);
                }}// chuyển trạng thái idel: tay ko chạm vào màn hình, setling: bỏ tay ra khỏi mh, dragging: tay chạm vào và kéo trang qua
                onPageSelected={(event)=>{
                    console.log(`Page: ${event.nativeEvent.position}`)
                }}
            >
                <View style={{backgroundColor: 'gold'}}>
                    <Text style={styles.textStyle}>Screen 1</Text>
                </View>
                <View style={{backgroundColor: 'tomato'}}>
                    <Text style={styles.textStyle}>Screen 2</Text>
                </View>
                <View style={{backgroundColor: 'blue'}}>
                    <Text style={styles.textStyle}>Screen 3</Text>
                </View>
            </ViewPagerAndroid>
            
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 15,
        color: 'white',
        textAlign: 'center'
    }
});