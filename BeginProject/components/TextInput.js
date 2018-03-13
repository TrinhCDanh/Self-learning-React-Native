import React, { Component } from 'react';
import { TextInput, View, Text, Keyboard } from 'react-native';

export default class TextInputExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your text',
            typedPassword: '',
            typedDesciption: ''
        }
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return {typedText: 'Keyboard is Shown'}
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState(() => {
                return {typedText: 'Keyboard is Hide'}
            })
        });
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove
    }

    onChange = (text) => {
        this.setState(
            (previousState) => {
                return {
                    typedText: text
                };
            }
        );
    }
    render() {
        return (
            <View>
            <TextInput 
                style={{
                    height: 40,
                    margin: 20,
                    padding: 10
                }} 
                keyboardType='email-address'
                placeholder="Enter your email"
                placeholderTextColor='red'
                onChangeText={
                    (text) => {
                        this.setState(
                            (previousState) => {
                                return {
                                    typedText: text
                                };
                            }
                        );
                    }
                }      
            />  
            <TextInput 
                style={{
                    height: 40,
                    margin: 20,
                    padding: 10
                }} 
                keyboardType='default'
                placeholder="Password"
                placeholderTextColor='red'
                secureTextEntry={true}  // che mật khẩu
                onChangeText={(text) => {this.setState(() => {
                                return {
                                    typedPassword: text
                                };
                            });}
                }  
            />
            <TextInput 
                style={{
                    height: 100,
                    margin: 20,
                    padding: 10
                }} 
                multiline={true} // giống textarea trong html
                editable={true} // cho phép thay đổi nội dung hay ko
                autoFocus={true} 
                returnKeyType='google' // ???????
                onSubmitEditing={Keyboard.dismiss} // close keyboard
                onChangeText={(text) => {this.setState(() => {
                                return {
                                    typedDesciption: text
                                };
                            });}
                }    
            />
            <Text>{this.state.typedText}</Text>
            <Text>{this.state.typedPassword}</Text>
            <Text>{this.state.typedDesciption}</Text>
            </View>
           
        );
    }
}