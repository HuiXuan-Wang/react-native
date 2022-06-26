import React from 'react';
import { Drawer,Router, Stack, Scene } from 'react-native-router-flux';
import MealList from './MealList';
import MealDetail from './MealDetail';
import MealDrawer from './MealDrawer';

class ch9_3 extends React.Component {
  render() {
    return (
      <Router>
        <Drawer contentComponent={MealDrawer}>
          <Stack key="root" headerLayoutPreset="center">
            <Scene key="MealList" title="餐點列表" component={MealList} initial />
            <Scene key="MealDetail" title="餐點明細" component={MealDetail} back />
          </Stack>
        </Drawer>
      </Router>
    );
  }
}

export default ch9_3;
