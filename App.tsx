/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {HomeScreen} from './src/screens/HomeScreen/HomeScreen';
import React from 'react';

import {RootNavigator} from './src/navigation/RootNavigator';
import {createRootModel} from './src/store/createRootModel';
import {RootModelProvider} from './src/store/useRoot';

function App(): React.JSX.Element {
  const rootModel = createRootModel();
  return (
    <RootModelProvider value={rootModel.store}>
      <RootNavigator />
    </RootModelProvider>
  );
}

export default App;
