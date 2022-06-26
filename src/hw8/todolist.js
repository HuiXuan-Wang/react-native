import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, ScrollView} from 'react-native';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default class TodoList extends Component {
  constructor(props){
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
  change = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      return todo.id === id ? { ...todo, completed:!todo.completed } : todo;
    });
    this.setState({
      todos:newTodos,
    });
  };

  AddTodo = (todo) =>{
    Alert.alert('已新增', '已成功新增待辦事項！',[{text:'確定'},]);
    this.setState({todos:[...this.state.todos,{id: this.state.todos.length +1,time: new Date().getHours()+':'+ new Date().getMinutes(),...todo,},],});
  };

  render() {
    const unCompletedTodos = this.state.todos.filter((todo) => todo.completed === false);
    const completedTodos = this.state.todos.filter((todo) => todo.completed === true);
    return (
      <View style={styles.whole}>
        <Text style={styles.title}>Xuan's to do list</Text>
        <TodoForm  AddTodo = {this.AddTodo}/>
        <View style = {styles.divider}/>
        <ScrollView>
          <View>
            <Text style={styles.todoTitle}>未完成項目</Text>
            <View style={styles.todoItems}>
              {unCompletedTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onPress={this.change} />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.todoTitle}>已完成項目</Text>
            <View style={styles.todoItems}>
              {completedTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onPress={this.change} />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  whole: {
    flex: 1,
    backgroundColor: '#C4E1FF',
    padding: 10, // 區塊四周內距大小
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    paddingVertical: 10,
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
  todoTitle: {
    color: '#5661EC',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
  todoItems: {
    marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
  },

});
