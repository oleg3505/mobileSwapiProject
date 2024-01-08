import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {screens} from './screens';
import {PersonScreen} from '../screens/PersonScreen/PersonScreen';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screens.Home} component={HomeScreen} />
        <Stack.Screen name={screens.Info} component={PersonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
