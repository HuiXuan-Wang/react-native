import React from 'react';
import {Text, View} from 'react-native';

const Clock = props => {
  return (
    <View>
      <Text>目前時間：{props.date.toLocaleTimeString()}</Text>
    </View>
  );
};

export default () => <Clock date={new Date()} />;
