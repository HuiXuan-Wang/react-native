import React from 'react';
import {Text, View} from 'react-native';

export default class ch7_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [1, 2, 3],
    };
  }

  componentDidMount() {
    const newitems = [...this.state.item, 4];
    this.setState({
      item: newitems,
    });
  }

  render() {
    return (
      <View>
        {/*<Text>Hello, ch7.</Text>
        <Text>{this.state.sex}</Text>*/}
        <Text>{this.state.item}</Text>
      </View>
    );
  }
}
