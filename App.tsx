/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import React from 'react';

import {RootNavigator} from './src/navigation/RootNavigator';

function App(): React.JSX.Element {
  return <RootNavigator />;
}

export default App;
