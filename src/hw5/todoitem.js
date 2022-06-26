import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function TodoItem(props) {
  return (
    <View style={styles.whole}>
      <View>
        <Text style={styles.title}>{props.todos.title}</Text>
        <Text style={styles.subtitle}>{props.todos.subTitle}</Text>
      </View>
      <Text>{props.todos.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  whole: {
    flexDirection: 'row',
    borderLeftWidth: 10,
    borderLeftColor: '#005AB5',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFDF',
    marginVertical: 5,
    borderRadius: 2,
    padding: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
  },
  time: {
    color: 'gray',
  },
});
