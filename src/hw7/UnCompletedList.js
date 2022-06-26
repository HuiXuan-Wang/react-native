import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import UnCompletedItem from './UnCompletedItem';

export default function UnCompletedList(props) {
  const {todos,onPress} = props;
  //console.log(onPress);
    return (
      <View>
        <Text style={styles.title}>未完成項目</Text>
        <View style={styles.todoItems}>
          {todos.map((todo) => (
            <UnCompletedItem key={todo.id} todo={todo} onPress = {onPress} />
          ))}
        </View>
      </View>
    );
  }
 
const styles = StyleSheet.create({
    title: {
      color: '#5661EC',
      fontSize: 20, // 標題文字大小
      fontWeight: 'bold', // 標題文字粗細
      padding: 10, // 上下垂直內聚大小
    },
    todoItems: {
      marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
    },
  });
  