import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Route from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Route />
      <StatusBar barStyle="dark-content"/>
    </NavigationContainer>
  );
}