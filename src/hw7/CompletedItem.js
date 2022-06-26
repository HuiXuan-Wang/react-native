import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

export default function CompletedItem(props) {
  return (
    <TouchableOpacity onPress={() => props.onPress(props.todo.id, false)} style={styles.content}>
      <View style={styles.imageContent}>
        <Image
          source={{
            uri: 'https://i.imgur.com/jxsdKdh.png',
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.todoContent}>
        <View>
          <Text style={styles.title}>{props.todo.title}</Text>
          <Text style={styles.subTitle}>{props.todo.subTitle}</Text>
        </View>
        <Text style={styles.time}>{props.todo.time}</Text>
      </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row', // 每個 TodoItem 區塊透過水平方向排列
    alignItems: 'center', // 垂直置中
    backgroundColor: '#FFF', // 區塊內的背景顏色
    borderLeftColor: 'gray',
    borderLeftWidth: 5, // 左邊框線粗細
    borderRadius: 2, // 框線圓角弧度
    marginVertical: 5, // 區塊上下垂直外距大小
    padding: 10, // 區塊四周內距大小
    elevation: 5, // 陰影深淺
  },
  imageContent: {
    flex: 0.1,
  },
  image: { width: 30, height: 30 },
  todoContent: {
    flex: 0.9,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'gray',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    textDecorationLine: 'line-through',
    fontStyle: 'italic',
  },
  subTitle: {
    fontSize: 14, // 子標題文字大小
    color: 'gray', // 子標題文字顏色
  },
  time: {
    color: 'gray', // 時間文字顏色
  },
});
