import { createStackNavigator } from '@react-navigation/stack';
import Weather from "./Weather"
import Login from "./Login"
import React from 'react';

const Stack = createStackNavigator();

console.log("sign in",Login)

export default function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Weather" component={Weather} />

    </Stack.Navigator>
  );
}