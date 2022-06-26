import React from 'react';
import { StyleSheet, View, Switch, TextInput, Button, Text, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Picker } from '@react-native-picker/picker';

export default class ChangeForm extends React.Component {

  constructor(props) {
    super(props);
    console.log('props:', props);
    this.state = {
      // 初始待辦類型
      type: 'life',
      // 初始待辦標題
      title: null,
      // 待辦備註
      subTitle: null,
      // 待辦是否完成
      completed: false,
      id: 1,
    };
  }

  // 變更待辦類型的選取值
  handleChangeType = (value) => {
    this.setState({
      type: value,
    });
  };
  handleChangeId = (value) => {
    this.setState({
      id: value,
    });
  };

  // 變更待辦標題的文字
  handleChangeTitle = (text) => {
    this.setState({
      title: text,
    });
  };

  // 變更待辦備註的文字
  handleChangeSubTitle = (text) => {
    this.setState({
      subTitle: text,
    });
  };

  // 變更是否完成的開關值
  handleChangeCompleted = (value) => {
    this.setState({
      completed: value,
    });
  };

  // 新增待辦按鈕點擊時觸發的 Callback 事件
  Update = () => {
    const { UpdateTodo } = this.props;
    // 返回前一個頁面
    Actions.pop();
    // 呼叫子元件所傳入的事件並將表單的輸入內容帶入參數回傳回去
    console.log('stste:', this.state);
    UpdateTodo(this.state);
    // 新增待辦事項後將表單設定回到初始預設值

  };


  render() {
    const { type, title, subTitle, completed, id } = this.state;
    const { todos } = this.props;
    //console.log('todos.id', todos[0].id);
    return (
      <ImageBackground source={{ uri: 'https://imgur.dcard.tw/3fn2GaPh.png' }} style={styles.container}>
        <View>
          <View style={styles.item}>
            <Text style={styles.label}>待辦編號</Text>
            <Picker selectedValue={id} onValueChange={this.handleChangeId} style={styles.picker}>
              {Object.keys(todos).map((key) => {
                return (<Picker.Item label={(todos[key].id).toString()} value={todos[key].id} />)
              })}
            </Picker>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>待辦類型</Text>
            <Picker selectedValue={type} onValueChange={this.handleChangeType} style={styles.picker}>
              <Picker.Item label="生活" value="life" />
              <Picker.Item label="工作" value="work" />
              <Picker.Item label="娛樂" value="entertainment" />
            </Picker>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>待辦標題</Text>
            <TextInput value={title} onChangeText={this.handleChangeTitle} style={styles.textInput} />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>備註事項</Text>
            <TextInput
              value={subTitle}
              onChangeText={this.handleChangeSubTitle}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>是否完成</Text>
            <Switch
              value={completed}
              onValueChange={this.handleChangeCompleted}
              style={styles.switch}
            />
          </View>
        </View>
        <Button title="修改待辦" disabled={!title || !subTitle} onPress={this.Update} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    //backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  picker: {
    width: 150,
    marginLeft: 30,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginLeft: 30,
  },
  switch: {
    marginLeft: 10,
  },
});
