import React, { Component } from 'react';
import { AppRegistry ,View, StyleSheet, FlatList, Text } from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: this.props.index % 2 == 0 ? 'gold' : 'tomato' }}>
               <Text>321</Text>
            </View>
        );
    }
}
export default class FlatList01 extends Component {
    render() {
        return (
            <View>
                <Text style={{color: 'black'}}>abc</Text>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index})=>{
                        return (
                            <FlatListItem item={item} index={index}> </FlatListItem>
                        );
                    }} // Tham số là một object, cách duyệt như map, forEach
                >
                </FlatList>
            </View>
        );
    }
}