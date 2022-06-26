import React from 'react';
import {View, Button, Text} from 'react-native';

function LoginButton(props) {
  return (
    <Button
      title="立即登出"
      color="#E83838"
      onPress={() => alert('登出成功!')}
    />
  );
}
function LogoutButton(props) {
  return (
    <Button
      title="請先登入"
      color="#0072FF"
      onPress={() => alert('登入成功!')}
    />
  );
}

function Greeting(props) {
  let message;
  // 用於儲存 button element 的變數
  let button;

  if (props.isLogin) {
    message = 'Welcome back!';
    button = <LoginButton />;
  } else {
    message = 'Please sign up.';
    button = <LogoutButton />;
  }
  return (
    <View>
      <Text>{message}</Text>
      {button}
    </View>
  );
}

export default () => <Greeting isLogin={false} />;
