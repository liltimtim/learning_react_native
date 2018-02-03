// one single location for all components to navigate too

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Container, Content } from 'native-base';
import SignInForm from './components/SignInForm';
import EmployeeList from './components/EmployeeList';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene
                    key="root"
                    hideNavBar>
                    <Scene key="auth" initial>
                        <Scene key="login" component={SignInForm} title="Please Login" initial/>
                    </Scene>
                    <Scene key="main" >
                        <Scene 
                        rightTitle="Add"
                        onRight={() => {}}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employees" />
                        
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

export default RouterComponent;