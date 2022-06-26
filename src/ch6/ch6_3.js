import React from 'react';
import {View, Text} from 'react-native';

function Todo(props) {
  return (
    <View>
      {/* 使用 inline if 與 &&，可以直接在 JSX 中同時判斷條件並渲染條件成立時要呈現的畫面 */}
      {props.unProcessTodos.length > 0 && (
        <Text>
          注意，您有{' '}
          <Text style={{fontWeight: 'bold', color: '#F00'}}>
            {props.unProcessTodos.length}
          </Text>{' '}
          筆訂單尚未處理。
        </Text>
      )}
    </View>
  );
}
const unProcessTodos = ['TODO1', 'TODO2', 'TODO3'];

export default () => <Todo unProcessTodos={unProcessTodos} />;
