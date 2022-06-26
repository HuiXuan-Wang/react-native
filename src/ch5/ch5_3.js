import React from 'react';
import {Text, View} from 'react-native';

/*const listitemstyle = {
  width: 100,
  height: 40,
  backgroundColor: '#FFFFBB',
  marginBottom: 5,
};*/

export default class ch5_3 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexWrap: 'wrap',
          alignContent: 'space-around',
        }}>
        <View style={{height: 170, width: 100, backgroundColor: '#FFFFBB'}}>
          <Text>1</Text>
        </View>
        <View style={{height: 170, width: 100, backgroundColor: '#E8CCFF'}}>
          <Text>2</Text>
        </View>
        <View style={{height: 170, width: 100, backgroundColor: '#FFD2D2'}}>
          <Text>3</Text>
        </View>
        <View style={{height: 170, width: 100, backgroundColor: '#CECEFF'}}>
          <Text>4</Text>
        </View>
        <View style={{height: 170, width: 100, backgroundColor: '#CEFFCE'}}>
          <Text>5</Text>
        </View>
      </View>
    );
  }
}
