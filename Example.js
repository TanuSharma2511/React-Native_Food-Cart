import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Example extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{marginTop:40,fontWeight:"800"}}>APP Delivery </Text>
      </View>
    );
  }
}