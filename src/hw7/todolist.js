import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import UnCompletedList from './UnCompletedList';
import CompletedList from './CompletedList';

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Visit doctor',
          subTitle: 'Remember to bring your documents',
          time: '14:43',
          completed: false,
        },
        {
          id: 2,
          title: 'Visit pathology lab',
          subTitle: 'Prepare relevant notes',
          time: '16:00',
          completed: true,
        },
        {
          id: 3,
          title: 'Attend gym',
          subTitle: 'Wearing sportswear',
          time: '17:20',
          completed: false,
        },
        {
          id: 4,
          title: 'Cook food',
          subTitle: 'Go to the supermarket to prepare ingredients',
          time: '19:00',
          completed: false,
        },
        { id: 5, title: 'watching TV', subTitle: 'Relax time', time: '20:00', completed: true },
        {
          id: 6,
          title: 'delectus aut autem',
          subTitle: 'quis ut nam facilis et officia qui',
          time: '20:00',
          completed: true,
        },
        {
          id: 7,
          title: 'fugiat veniam minus',
          subTitle: 'et porro tempora',
          time: '02:30',
          completed: true,
        },
        {
          id: 8,
          title: 'vero rerum temporibus dolor',
          subTitle: 'et doloremque nulla',
          time: '05:08',
          completed: true,
        },
        {
          id: 9,
          title: 'ab voluptatum amet voluptas',
          subTitle: 'quo laboriosam deleniti aut qui',
          time: '17:22',
          completed: true,
        },
        {
          id: 10,
          title: 'nesciunt totam sit blanditiis sit',
          subTitle: 'laborum aut in quam',
          time: '15:33',
          completed: false,
        },
        {
          id: 11,
          title: 'nemo perspiciatis repellat ut',
          subTitle: 'earum doloribus ea doloremque quis',
          time: '20:00',
          completed: true,
        },
        {
          id: 12,
          title: 'sint sit aut vero',
          subTitle: 'repellendus veritatis molestias',
          time: '14:20',
          completed: true,
        },
        {
          id: 13,
          title: 'totam quia non',
          subTitle: 'doloremque quibusdam asperiores',
          time: '16:51',
          completed: false,
        },
        {
          id: 14,
          title: 'totam atque quo nesciunt',
          subTitle: 'tempore ut sint quis recusandae',
          time: '19:08',
          completed: true,
        },
        {
          id: 15,
          title: 'sit reprehenderit omnis quia',
          subTitle: 'qui labore est occaecati recusandae aliquid',
          time: '23:33',
          completed: false,
        },
      ],
    };
  }
  change = (id,isCompleted) => {
    const newTodos = this.state.todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: isCompleted } : todo;
    });
    this.setState({
      todos:newTodos,
    });
  };
  render() {
    //const {todos} = todos;
    const unCompletedTodos = this.state.todos.filter((todo) => todo.completed === false);
    const completedTodos = this.state.todos.filter((todo) => todo.completed === true);
    return (
      <View style={styles.whole}>
        <Text style={styles.title}>Xuan's to do list</Text>
        <ScrollView>
          <UnCompletedList todos={unCompletedTodos} onPress={this.change} />
          <CompletedList todos={completedTodos} onPress={this.change} />
          {/*<TodoItem todos={this.todo[0]} />
          <TodoItem todos={this.todo[1]} />
          <TodoItem todos={this.todo[2]} />
          <TodoItem todos={this.todo[3]} />
          <TodoItem todos={this.todo[4]} />*/}
        </ScrollView>
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
              </View>*/
    );
  };
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
