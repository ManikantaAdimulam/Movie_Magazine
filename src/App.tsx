/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';
import store from '@redux/index';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '@services/navigation/navigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
