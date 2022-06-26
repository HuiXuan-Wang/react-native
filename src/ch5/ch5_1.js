import React from 'react';
import {Text, View} from 'react-native';
import styles from './ch5_1style';

/*const listitemstyle = {
  width: 100,
  height: 40,
  backgroundColor: '#FFFFBB',
  marginBottom: 5,
};*/

export default class ch5_1 extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.listitemstyle}>
          <Text>待辦一</Text>
        </View>
        <View style={[styles.listitemstyle, {backgroundColor: '#A97482'}]}>
          <Text>待辦二</Text>
        </View>
        <View style={styles.listitemstyle}>
          <Text>待辦三</Text>
        </View>
      </View>
    );
  }
}
