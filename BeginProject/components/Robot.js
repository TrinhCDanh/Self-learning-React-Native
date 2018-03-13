/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Robot extends Component {
  render() {
    const imageSrc = {
      uri: "https://depdrama.com/wp-content/uploads/2016/11/hinh-anh-hoat-hinh-dep-nhat-danh-cho-con-gai-2.jpg"
    }
    return (
        <Image  
            source={imageSrc} 
            style={{ width: 200, height: 200}}      
        ></Image>
    );
  }
}

