// one single location for all components to navigate too

import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Container, Content } from 'native-base';
import SignInForm from './components/SignInForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene
                    key="root"
                    hideNavBar>
                    <Scene key="auth" initial>
                        <Scene key="login" component={SignInForm} title="Please Login"/>
                    </Scene>
                    <Scene key="main" >
                        <Scene 
                        rightTitle="Add"
                        onRight={() => { Actions.createEmployee() }}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" />
                        <Scene
                        key="createEmployee"
                        component={EmployeeCreate}
                        />
                        <Scene
                        key="employeeEdit"
                        title="Edit Employee"
                        component={EmployeeEdit}
                        />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;