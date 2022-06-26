import React from 'react';
import {Text, View} from 'react-native';

export default class ch7_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Steven',
      emial: 'steven@gmail.com',
      age: 28,
    };
  }

  componentDidMount() {
    this.setState({name: 'Chris', sex: 'male'});
  }
  render() {
    return (
      <View>
        {/*<Text>Hello, ch7.</Text>*/}
        <Text>{this.state.name}</Text>
        <Text>{this.state.sex}</Text>
      </View>
    );
  }
}
