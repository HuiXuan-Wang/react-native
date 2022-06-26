import React from 'react';
import {Text, View} from 'react-native';

/*const listitemstyle = {
  width: 100,
  height: 40,
  backgroundColor: '#FFFFBB',
  marginBottom: 5,
};*/

export default class ch5_2 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch'}}>
        <View style={{height: 100, width: 100, backgroundColor: '#FFFFBB'}} />
        <View style={{height: 100, width: 100, backgroundColor: '#E8CCFF'}} />
        <View style={{height: 100, width: 100, backgroundColor: '#D8AACC'}} />
      </View>
    );
  }
}
