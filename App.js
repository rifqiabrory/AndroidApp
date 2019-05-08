/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from "./Home";
import Result from "./Result";

const RootStack = createStackNavigator({
  Home: {screen : Home},
  Result: { screen: Result },
});

const App = createAppContainer(RootStack);

export default App;