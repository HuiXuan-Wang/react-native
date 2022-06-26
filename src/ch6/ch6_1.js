import React from 'react';
import {Text} from 'react-native';

/*export default class ch6_1 extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello, ch6.</Text>
      </View>
    );
  }
}*/

function ch6_1(props) {
  return <Greeting isLogin={false} />;
}

function UserGreeting(props) {
  return <Text>Welcome back, {props.username}!</Text>;
}

function GuestGreeting(props) {
  return <Text>Please sign up.</Text>;
}

function Greeting(props) {
  if (props.isLogin) {
    return <UserGreeting username="Jacky" />;
  }
  return <GuestGreeting />;
}
export default ch6_1;
