import React from 'react';
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Routes = () => {
    return (
        <Router>
            <Drawer>
                <Stack key="root" headerLayoutPreset="center">
                    <Scene key="TodoList" component={TodoList} title="Xuan's to do list" initial />
                    <Scene key="TodoForm" component={TodoForm} title="新增待辦" back />
                </Stack>
            </Drawer>
        </Router >
    );
};

export default Routes;
