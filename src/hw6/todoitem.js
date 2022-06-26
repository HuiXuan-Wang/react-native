import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const completedicon = 'https://i.imgur.com/jxsdKdh.png';
const uncompletedicon = 'https://i.imgur.com/zrs3alB.png';

export default function TodoItem(props) {
  return (
    <View
      style={[
        styles.whole,
        props.todos.completed
          ? styles.completedborder
          : styles.uncompletedborder,
      ]}>
      <View style={styles.imageplace}>
        <Image
          source={{
            uri: props.todos.completed ? completedicon : uncompletedicon,
          }}
          style={styles.imagesize}
        />
      </View>
      <View style={styles.todoplace}>
        <View>
          <Text
            style={
              props.todos.completed
                ? styles.completetitle
                : styles.uncompletetitle
            }>
            {props.todos.title}
          </Text>
          <Text style={styles.subtitle}>{props.todos.subTitle}</Text>
        </View>
        <Text>{props.todos.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  whole: {
    flexDirection: 'row',
    borderLeftWidth: 10,
    //borderLeftColor: '#005AB5',
    //justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFDF',
    marginVertical: 5,
    borderRadius: 2,
    padding: 10,
    elevation: 5,
  },
  completedborder: {
    borderLeftColor: '#E0E0E0',
  },
  uncompletedborder: {
    borderLeftColor: '#005AB5',
  },
  imageplace: {
    flex: 0.1,
  },
  imagesize: {
    width: 30,
    height: 30,
  },
  todoplace: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  /*title: {
    fontSize: 20,
    fontWeight: 'bold',
  },*/
  uncompletetitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  completetitle: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'line-through', //劃掉
    fontStyle: 'italic', //斜體
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  time: {
    color: 'gray',
  },
});
