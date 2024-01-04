import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen';
import {screens} from './screens';

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screens.Home} component={HomeScreen} />
        <Stack.Screen name={screens.Info} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
