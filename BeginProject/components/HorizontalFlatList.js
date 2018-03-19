import React, { Component } from 'react';
import { 
    AppRegistry, View, 
    StyleSheet, FlatList, Text, 
    Image, Alert, TouchableHighlight,
    TouchableOpacity, ImageBackground 
} from 'react-native';
import {horizontalFlatListData, horizonStatus} from '../data/horizontalFlatListData';
import Icon from 'react-native-vector-icons/Ionicons';

class HorizontalFlatItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 90,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'grey',
                    margin: 4
                }}
           >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                        margin: 20
                    }}
                >{this.props.item.hour}</Text>
                <Icon name={this.props.item.status.android} size={30} color="white" />
                    <Text
                    style={{
                        fontSize: 16,
                        color: 'white',
                        margin: 10
                    }}
                >{this.props.item.degrees}</Text>
           </View>
        );
    }
}
export default class HorizontalFlatList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                }}
            >
                <View style={{height: 150}}>
                    <FlatList
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.5
                        }}
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={({item, index}) => {
                            return (
                                <HorizontalFlatItem 
                                    item={item} 
                                    index={index} 
                                    parentFlatList={this}>
                                </HorizontalFlatItem>
                            )
                        }}
                        keyExtractor={(item) => item.hour}
                    ></FlatList>
                </View>
            </View>
        );
    }
}