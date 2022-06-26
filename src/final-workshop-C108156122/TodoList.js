import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TodoItem from './TodoItem';
import ChangeForm from './ChangeForm';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          type: 'life',
          title: 'Visit doctor',
          subTitle: 'Remember to bring your documents',
          time: '14:43',
          completed: false,
        },
        {
          id: 2,
          type: 'life',
          title: 'Visit pathology lab',
          subTitle: 'Prepare relevant notes',
          time: '16:00',
          completed: true,
        },
        {
          id: 3,
          type: 'work',
          title: 'Attend gym',
          subTitle: 'Wearing sportswear',
          time: '17:20',
          completed: false,
        },
        {
          id: 4,
          type: 'life',
          title: 'Cook food',
          subTitle: 'Go to the supermarket to prepare ingredients',
          time: '19:00',
          completed: false,
        },
        {
          id: 5,
          type: 'entertainment',
          title: 'watching TV',
          subTitle: 'Relax time',
          time: '20:00',
          completed: true,
        },
        {
          id: 6,
          type: 'work',
          title: 'delectus aut autem',
          subTitle: 'quis ut nam facilis et officia qui',
          time: '20:00',
          completed: true,
        },
        {
          id: 7,
          type: 'entertainment',
          title: 'fugiat veniam minus',
          subTitle: 'et porro tempora',
          time: '02:30',
          completed: true,
        },
        {
          id: 8,
          type: 'work',
          title: 'nesciunt totam sit blanditiis sit',
          subTitle: 'laborum aut in quam',
          time: '15:33',
          completed: false,
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      leftTitle: "C108156122\n王薈宣",
      //onLeft: () => { alert("C108156122 王薈宣"); },
      title: "Xuan's to do list",
      rightTitle: '新增',
      onRight: () => {
        Actions.TodoForm({ AddTodo: this.AddTodo });
      },
      //tabBarOnPress: () => {
      //Actions.ChangeForm({ UpdateTodo: this.UpdateTodo });
      //},
    });
  }

  change = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.setState({
      todos: newTodos,
    });
  };

  AddTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, { id: this.state.todos.length + 1, time: new Date().getHours() + ':' + new Date().getMinutes(), ...todo, },], });
  };

  DeleteTodo = (id) => {
    const { todos } = this.state;
    //console.log(todos);
    const no = id - 1;
    console.log("no:", no);
    this.state.todos.map((todo) => {
      if (todo.id === id) { todos.splice(no, 1, 0), alert('已成功刪除待辦事項！', '刪除', [{ text: '確定' },]); };
    });
    //console.log(todos)
    this.setState({
      todos: todos,
    });
  };
  UpdateTodo = (todos) => {
    console.log('123', todos);
    const newtodo = this.state.todos.map((todo) => {
      return todo.id === todos.id ? { ...todo, type: todos.type, title: todos.title, subTitle: todos.subTitle, completed: todos.completed } : todo;
    });
    this.setState({
      todos: newtodo,
    });
  };
  render() {
    const { todos } = this.state;
    const unCompletedTodos = this.state.todos.filter((todo) => todo.completed === false);
    const completedTodos = this.state.todos.filter((todo) => todo.completed === true);
    //const ChangeTodo = this.state.todos.filter((todo) => todo.id === id);
    return (
      <View style={styles.whole}>
        <ScrollView>
          <View>
            <Text style={styles.todoTitle}>未完成項目</Text>
            <View style={styles.todoItems}>
              {unCompletedTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onPress={this.change} onLongPress={this.DeleteTodo} />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.todoTitle}>已完成項目</Text>
            <View style={styles.todoItems}>
              {completedTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onPress={this.change} onLongPress={this.DeleteTodo} />
              ))}
            </View>
          </View>
          <View>
            <Button onPress={() => Actions.ChangeForm({ todos: todos, UpdateTodo: this.UpdateTodo })} title='修改' style={styles.ItemText} />
            {console.log(todos)}
          </View>
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    backgroundColor: '#9cadbf',
    padding: 2.5, // 區塊四周內距大小
  },
  todoitem: {
    marginHorizontal: 10,
  },
  todoTitle: {
    color: '#2f554b',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
  todoItems: {
    marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
  },

});
