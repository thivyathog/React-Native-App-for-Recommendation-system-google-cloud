/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Login from './screens/Login'
import SignupScreen from './screens/SignUpScreen'
import HomeScreen from "./screens/HomeScreen";
import StartScreen from "./screens/Start"
import PreferenceScreen from "./screens/PreferenceScreen"
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'StartScreen'};
    setTimeout(() => {
      this.setState({currentScreen: 'Login'})
    }, 9000);
  }
    render() {

      const {currentScreen} = this.state;
      let mainScreen=currentScreen==='StartScreen' ? <StartScreen/>:<Login/>;
      return mainScreen
   // <AppStack/>
    }
}
const AppStackNavigator= createStackNavigator({
  StartScreen:StartScreen,
  Login:Login,
  SignUpScreen:SignupScreen,
  Home:HomeScreen,
PreferenceScreen:PreferenceScreen
},{
  defaultNavigationOptions: {
    header: null
  },
});

const AppStack = createAppContainer(AppStackNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
