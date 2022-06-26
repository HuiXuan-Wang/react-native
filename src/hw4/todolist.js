import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TodoItem from './todoitem';

export default class TodoList extends Component {
  todo = [
    {id: 1, title: 'delectus aut autem', completed: false},
    {id: 2, title: 'quit ut nam facilis et officia qui', completed: false},
    {id: 3, title: 'fugiat veniam minus', completed: false},
    {id: 4, title: 'et porrp tempora', completed: true},
    {
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
  ];

  render() {
    return (
      <View>
        <Text>Xuan to do list</Text>
        <View>
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
