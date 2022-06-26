import React from 'react';
import {Text, View} from 'react-native';

export default function TodoItem(props) {
  return (
    <View>
      <Text>ID：{props.todos.id}</Text>
      <Text>Title：{props.todos.title}</Text>
    </View>
  );
}
