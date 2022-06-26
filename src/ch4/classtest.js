import React from 'react';
import {Text, View} from 'react-native';

class Welcome2 extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello {this.props.name}！</Text>
      </View>
    );
  }
}
export default Welcome2;
