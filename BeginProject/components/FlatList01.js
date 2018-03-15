import React, { Component } from 'react';
import { AppRegistry ,View, StyleSheet, FlatList, Text, Image, Alert, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';


class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }
    }
    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                   this.setState({activeRowKey: null}); 
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    //Refresh FlatList
                                    this.props.refreshFlatList(deletingRow);
                                }},
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return (
            <Swipeout {...swipeSetting}>
                <View style={{
                    flex: 1, 
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flex: 1, 
                        flexDirection: 'row',
                        backgroundColor: 'cyan'
                    }}>
                        <Image
                            source={{uri: this.props.item.img}}
                            style={{width: 100, height: 100, margin: 5}}
                        ></Image>
                        <View style={{flex: 1, flexDirection: 'column', height: 100, padding: 5}}>
                            <Text>{this.props.item.name}</Text>
                            <Text>{this.props.item.description}</Text>
                        </View>
                    </View>
                    <View
                        style={{height:1, backgroundColor:'white'}}
                    >
                    </View>
                </View>
            </Swipeout>
        );
    }
}
export default class FlatList01 extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deleteRowKey: null,
        });
    }
    refreshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: deleteKey
            };
        });
    }
    _triggerButton = () => {
        alert('Hello world')
    }
    _onPressAdd = () => {
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={ {height: 50, backgroundColor: 'tomato', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'
            } }>
                    <TouchableHighlight 
                        onPress={this._onPressAdd}
                        underlayColor='red'
                        style={{marginRight: 10}}
                    >
                        <Image 
                            style={{width: 30, height: 30}}
                            source={require("../images/add.png")}>
                        </Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index})=>{
                        return (
                            <FlatListItem item={item} index={index} refreshFlatList={this.refreshFlatList}> </FlatListItem>
                        );
                    }} // Tham số là một object, cách duyệt như map, forEach
                >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}> </AddModal>
            </View>
        );
    }
}