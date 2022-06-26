import React from 'react';
import {Text, View} from 'react-native';

export default class ch7_4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  render() {
    return (
      <View>
        <Text>目前時間：{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}
//export default () => <Clock />;
