import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import MealList from './MealList';
import MealDetail from './MealDetail';

class ch9_2 extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root" headerLayoutPreset="center">
          <Scene key="MealList" title="餐點列表" component={MealList} initial />
          <Scene key = "MealDetail" title="點餐明細" component={MealDetail} back />
        </Stack>
      </Router>
    );
  }
}

export default ch9_2;
