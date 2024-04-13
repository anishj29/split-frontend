import React, { useState } from 'react';
import CreateAccount from './components/CreateAccount.js';
import Login from './components/Login.js';
import Activity from './components/Activity.js';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="Activity" component={Activity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


