import React, { Component } from 'react';
import { 
    AppRegistry, View, 
    StyleSheet, FlatList, Text, 
    Image, Alert, SectionList
} from 'react-native';
import {sectionListData} from '../data/sectionListData';

class SectionFlatItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
           <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: 'gold'
                }}
           >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                        marginLeft: 10,
                        marginRight: 10
                    }}
                >{this.props.item.name}</Text>
                <Text
                    style={{
                        fontSize: 16,
                        color: 'white',
                        marginLeft: 10,
                        marginRight: 10
                    }}
                >{this.props.item.description}</Text>
           </View>
        );
    }
}

class SectionHeader extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'tomato'}}>
                <Text 
                    style={{
                        fontSize: 16, 
                        fontWeight: 'bold'
                }}>{this.props.section.title}</Text>
                
            </View>
        );
    }
}

export default class SectionFlatList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <SectionList
                    renderItem={({item, index})=>{
                        return  (<SectionFlatItem
                                    index={index}
                                    item={item}
                                ></SectionFlatItem>);
                        
                    }}
                    renderSectionHeader={({section})=> {
                        return (<SectionHeader section={section} />)
                    }}
                    sections={sectionListData}
                    keyExtractor={(item) => item.name}
                >
                </SectionList>
            </View>
        );
    }
}