import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginForm from './src/components/LoginForm';
import RegisterForm from './src/components/RegisterForm';

export default class App extends Component{
  render(){
    return(
      <RegisterForm />
    );
  }
}
