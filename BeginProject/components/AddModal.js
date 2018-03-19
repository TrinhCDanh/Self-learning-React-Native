import React, { Component } from 'react';
import { Image, AppRegistry, FlatList, StyleSheet, Text, TextInput,
View, Alert, Platform, TouchableHighlight, Dimensions } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    
    createId = () => {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }
    render() {
        return (
            <Modal
                ref={"myModal"} 
                style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 200,
                    //textAlign: 'center'
                }}
                position='center'
                backdrop={true}
                // onClosed={() => {
                //     alert('Modal close');
                // }}
            >
                <Text style={{textAlign: 'center'}}> New information </Text>
                <TextInput
                    onChangeText={(text) => this.setState({name: text})}
                    style={{
                        height: 40,
                        margin: 10
                    }}
                    placeholder="Enter your name"
                    value={this.state.name}
                />
                <TextInput
                    onChangeText={(text) => this.setState({description: text})}
                    style={{
                        height: 40,
                        margin: 10
                    }}
                    placeholder="Enter your description"
                    value={this.state.description}
                /> 
                <Button
                    onPress={() => {
                        if(this.state.name.length == 0 || this.state.description.length == 0) {
                            alert('Null');
                            return;
                        } 
                        const newInfo = {
                            key: this.createId(),
                            name: this.state.name,
                            description: this.state.description,
                            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Zof8v-gxtgMnkfd2KkPlPMosKeo4BldonkUjdMaOqIvvhaRF'
                        }
                        flatListData.push(newInfo);
                        this.props.parentFlatList.refreshFlatList(newInfo.key);
                        this.refs.myModal.close();
                    }}
                > 
                    Save    
                </Button> 
            </Modal>
        );
    }
}

