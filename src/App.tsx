/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Provider} from 'react-redux';
import store, {persistor} from '@redux/index';
import Routes from '@services/navigation/navigator';
import {PersistGate} from 'redux-persist/integration/react';
import strings from '@utils/localisation';

function App(): React.JSX.Element {
  //
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {Routes()}
      </PersistGate>
    </Provider>
  );
}

export default App;
