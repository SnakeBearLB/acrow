import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Root from './root';

const Stack = createNativeStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Root" component={Root}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}