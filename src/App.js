/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
