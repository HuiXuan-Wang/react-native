import React from 'react';
import {Text, View} from 'react-native';

export default class ch7_6 extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor__時間元件初始化完成!');
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log('componentDidMount__時間元件初始載入完成!');
    this.timerId = setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate__時間元件已完成重新渲染畫面了!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount__時間元件要被卸載了，將 timerId 移除!');
    clearInterval(this.timerId);
  }

  render() {
    console.log('render__時間元件 State 更新了，觸發重新渲染畫面!');
    return (
      <View>
        <Text>目前時間：{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}
//export default () => <Clock />;
