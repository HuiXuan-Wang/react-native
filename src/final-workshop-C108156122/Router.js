import React from 'react';
import { Text } from 'react-native';
import { Router, Stack, Scene, Drawer, Tabs } from 'react-native-router-flux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import SetDrawer from './SetDrawer';
import ChangeForm from './ChangeForm';

const TabIcon = (props) => {
    return <Text style={{ fontSize: 20, color: props.focused ? '#007AFF' : 'black' }}>{props.title}</Text>
};


const Routes = () => {
    return (
        <Router>
            <Drawer contentComponent={SetDrawer}>
                <Stack key="root" headerLayoutPreset="center" title="列表" icon={TabIcon} >
                    <Scene key="TodoList" component={TodoList} title="Xuan's to do list" initial />
                    <Scene key="TodoForm" component={TodoForm} title="新增待辦" back />
                    <Scene key="ChangeForm" component={ChangeForm} title="修改待辦" icon={TabIcon} back />
                </Stack>
            </Drawer>
        </Router>
    );
};

export default Routes;
{/*<Tabs headerLayoutPreset="center" tabBarPosition="bottom" showLabel={false}>
                </Tabs>*/}
