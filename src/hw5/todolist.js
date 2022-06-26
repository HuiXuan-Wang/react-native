import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TodoItem from './todoitem';

export default class TodoList extends Component {
  todo = [
    {
      id: 1,
      title: 'Visit doctor',
      subTitle: 'Remember to bring you documents',
      time: '14:13',
      completed: false,
    },
    {
      id: 2,
      title: 'Visit pathology lab',
      subTitle: 'Perpare relevant notes',
      time: '16:00',
      completed: true,
    },
    {
      id: 3,
      title: 'Attend gym',
      subTitle: 'Wearing sportwear',
      time: '17:20',
      completed: false,
    },
    {
      id: 4,
      title: 'Cook food',
      subTitle: 'Go to the supermarket to prepare ingredients',
      time: '19:00',
      completed: true,
    },
    {
      id: 5,
      title: 'Wathing TV',
      subTitle: 'Relax time',
      time: '20:00',
      completed: false,
    },
  ];

  render() {
    return (
      <View style={styles.whole}>
        <Text style={styles.title}>Xuan's to do list</Text>
        <View style={styles.todoitem}>
          <TodoItem todos={this.todo[0]} />
          <TodoItem todos={this.todo[1]} />
          <TodoItem todos={this.todo[2]} />
          <TodoItem todos={this.todo[3]} />
          <TodoItem todos={this.todo[4]} />
        </View>
      </View>

      /*<View>
            <Text>Xuan to do list</Text>
            <View>
            <Text>ID：{this.todo[0].id}</Text>
            <Text>Title：{this.todo[0].title}</Text>

            <Text>ID：{this.todo[1].id}</Text>
            <Text>Title：{this.todo[1].title}</Text>

            <Text>ID：{this.todo[2].id}</Text>
            <Text>Title：{this.todo[2].title}</Text>

            <Text>ID：{this.todo[3].id}</Text>
            <Text>Title：{this.todo[3].title}</Text>

            <Text>ID：{this.todo[4].id}</Text>
            <Text>Title：{this.todo[4].title}</Text>
            </View>
        </View>
      */
    );
  }
}

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    backgroundColor: '#C4E1FF',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  todoitem: {
    marginHorizontal: 10,
  },
});
