import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import MealList from './MealList';

class ch9_1 extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" headerLayoutPreset="center">
          <Scene key="MealList" title="餐點列表" component={MealList} initial />
        </Stack>
      </Router>
    );
  }
}

export default ch9_1;
