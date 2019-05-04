/**
 * @format
 */
import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import Start from './Components/Start'
import Login from './Components/Login'
import Signup from './Components/signup'
import {name as appName} from './app.json';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {currentScreen: 'Start'};
        setTimeout(()=>{
            this.setState({currentScreen:'Login'})
        },9000)
       

    }

    render(){
        const {currentScreen} = this.state
        let mainScreen=currentScreen==='Start' ? <Start/>:<Login/>
        return mainScreen
    }
}
AppRegistry.registerComponent(appName, () => Signup);
